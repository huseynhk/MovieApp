import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import { FiEye } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const WishList = () => {
  const [datas, setDatas] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setShow(false);
  };

  useEffect(() => {
    const wishList = localStorage.getItem("wishList");
    if (wishList) {
      setDatas(JSON.parse(wishList));
    }
  }, []);

  const deleteWishMovie = (imdbID) => {
    const deletedMovie = datas.filter((movie) => movie.imdbID !== imdbID);
    setDatas(deletedMovie);
    localStorage.setItem("wishList", JSON.stringify(deletedMovie));
  };

  return (
    <>
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
                className="card-img-top h-75 object-fit-cover"
                alt={movie.Title}
              />
              <div
                className="card-body bg-dark text-white h-25 
              d-flex justify-content-center align-items-center flex-column"
              >
                <h5 className="card-title my-3">{movie.Title.slice(0, 20)}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <div className="d-flex align-items-center ">
                  <p className="cursor" onClick={() => openModal(movie)}>
                    <FiEye size={30} />
                  </p>
                  <p
                    className="cursor ms-1"
                    onClick={() => deleteWishMovie(movie.imdbID)}
                  >
                    <AiOutlineDelete size={30} />
                  </p>
                </div>

                <p className="cursor">
                  <Link className="cursor mb-3" to={`/movie/${movie.imdbID}`}>
                    Go Detail Page
                  </Link>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-danger text-center mt-5">Not Found...</h1>
        )}
      </div>

      <MovieDetails
        selectedMovie={selectedMovie}
        show={show}
        closeModal={closeModal}
      />
    </>
  );
};

export default WishList;
