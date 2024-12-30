import React, { useCallback, useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import { FiEye } from "react-icons/fi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GetMovies, GetSearchMovies } from "../api/GetRequest";
import { ROUTER } from "../constant/Router";

const Movie = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);
  const [wishList, setWishList] = useState(
    localStorage.getItem("wishList")
      ? JSON.parse(localStorage.getItem("wishList"))
      : []
  );

  const fetchMovies = useCallback(async () => {
    const response = await GetMovies();
    setDatas(response ? response.Search : []);
  }, []);

  const fetchSearchMovies = useCallback(async () => {
    const response = await GetSearchMovies(search);
    setDatas(response ? response.Search : []);
  }, [search]);

  const addToWishList = useCallback(
    (imdbID) => {
      const selectedMovie = datas.find((movie) => movie.imdbID === imdbID);
      const existedMovie = wishList.find((movie) => movie.imdbID === imdbID);
      const wishedMovies = existedMovie
        ? [...wishList]
        : [...wishList, selectedMovie];
      setWishList(wishedMovies);
      localStorage.setItem("wishList", JSON.stringify(wishedMovies));

      if (!existedMovie) {
        toast.success("Movie added successfully!", {
          autoClose: 1000,
        });
      } else {
        toast.warning("Movie already added!", { autoClose: 1000 });
      }
      // setWishList((prevDatas) => [...prevDatas, selectedMovie]);
    },
    [datas, wishList]
  );

  const resetMovies = useCallback(() => {
    fetchMovies();
    setSearch("");
  }, [fetchMovies]);

  const openModal = useCallback((movie) => {
    setSelectedMovie(movie);
    setShow(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedMovie(null);
    setShow(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    fetchSearchMovies();
  }, [search]);


  useEffect(() => {
    if (search === '') {
      fetchMovies(); 
    }
  }, [search]);
  return (
    <>
      <Helmet>
        <title>All Movies</title>
      </Helmet>
      <div className="d-flex justify-content-center m-4">
        <div className="d-flex justify-content-center flex-column">
          <div className="input-group w-100 border border-primary rounded mt-2">
            <input
              type="text"
              className="form-control px-3 py-2 "
              placeholder="Search"
              value={search}
              style={{width:"20rem"}}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* <button
            onClick={resetMovies}
            className="btn btn-dark border border-light-subtle mt-2 py-2"
          >
            Reset
          </button> */}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {datas ? (
          datas.map((movie, index) => {
            const isInWishList = wishList.some(
              (item) => item.imdbID === movie.imdbID
            );
            return (
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
                  <h5 className="card-title my-3 truncate">
                    {movie.Title}
                  </h5>
                  <p className="card-text">Year: {movie.Year}</p>
                  <div className="d-flex align-items-center ">
                    <p className="cursor" onClick={() => openModal(movie)}>
                      <FiEye color="cyan" size={30} />
                    </p>
                    <p
                      className="cursor ms-2"
                      onClick={() => addToWishList(movie.imdbID)}
                    >
                      {isInWishList ? (
                        <IoHeartSharp color="red" size={30} />
                      ) : (
                        <IoHeartOutline color="red" size={30} />
                      )}
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
            );
          })
        ) : (
          <h1 className="text-center mt-5" style={{color:"#c7ff6c"}}>Not Found...</h1>
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

export default Movie;
