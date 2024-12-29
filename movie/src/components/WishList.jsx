import React, { useCallback, useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import { FiEye } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ROUTER } from "../constant/Router";
import { Modal } from "react-bootstrap";

const WishList = () => {
  const [datas, setDatas] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  const openModal = useCallback((movie) => {
    setSelectedMovie(movie);
    setShow(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedMovie(null);
    setShow(false);
  }, []);

  const openDeleteModal = (movie) => {
    setMovieToDelete(movie);
  };

  const closeDeleteModal = () => {
    setMovieToDelete(null);
  };
  useEffect(() => {
    const wishList = localStorage.getItem("wishList");
    if (wishList) {
      setDatas(JSON.parse(wishList));
    }
  }, []);

  const confirmDelete = () => {
    if (movieToDelete) {
      const deletedMovie = datas.filter(
        (movie) => movie.imdbID !== movieToDelete.imdbID
      );
      setDatas(deletedMovie);
      localStorage.setItem("wishList", JSON.stringify(deletedMovie));
      toast.success("Movie Deleted!", { autoClose: 1000 });
    }
    closeDeleteModal();
  };

  return (
    <>
      <Helmet>
        <title>WishList</title>
      </Helmet>
      <div className="d-flex flex-wrap justify-content-center">
        {datas && datas.length > 0 ? (
          datas.map((movie, index) => (
            <div
              key={index}
              className="card m-4 border-white"
              style={{ width: "20rem" }}
            >
              <img
                src={movie.Poster}
                className="card-img-top img"
                alt={movie.Title}
              />
              <div
                className="card-body bg-dark text-white h-25 
              d-flex justify-content-center align-items-center flex-column"
              >
                <h5 className="card-title my-3 truncate">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <div className="d-flex align-items-center ">
                  <p className="cursor" onClick={() => openModal(movie)}>
                    <FiEye color="cyan" size={30} />
                  </p>
                  <p
                    className="cursor ms-2"
                    onClick={() => openDeleteModal(movie)}
                  >
                    <AiOutlineDelete color="orange" size={30} />
                  </p>
                </div>

                <p className="cursor">
                  <Link
                    className="cursor mb-3"
                    style={{color:"#c7ff6c"}}
                    to={`${ROUTER.MovieRouter}/${movie.imdbID}`}
                  >
                    Go Detail Page
                  </Link>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-danger text-center mt-5">Empty...</h1>
        )}
      </div>

      <MovieDetails
        selectedMovie={selectedMovie}
        show={show}
        closeModal={closeModal}
      />
      <Modal show={movieToDelete} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete "{movieToDelete?.Title}" from your
          watchlist?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeDeleteModal}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={confirmDelete}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WishList;
