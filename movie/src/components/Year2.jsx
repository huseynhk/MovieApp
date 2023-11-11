import React, { useState, useEffect } from "react";
import { GetMovies } from "../api/GetRequest";
import MovieDetails from "./MovieDetails";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Year2 = () => {
  const [datas, setDatas] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const fetchMovies = async () => {
    const response = await GetMovies();
    const allMovies = response ? response.Search : [];

    const moviesBetween2000And2022 = allMovies.filter(
      (movie) => parseInt(movie.Year) >= 2000 && parseInt(movie.Year) <= 2024
    );
    setDatas(moviesBetween2000And2022);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setShow(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap h-100 justify-content-center align-items-center ">
        {datas ? (
          datas.map((movie, index) => (
            <div
              key={index}
              className="card m-2 border-white mt-2"
              style={{ width: "18rem" }}
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
                <p className="cursor" onClick={() => openModal(movie)}>
                  <FiEye size={30} />
                </p>
                <p className="cursor">
                  <Link className="cursor mb-3" to={`/movie/${movie.imdbID}`}>
                    Go Router Page
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

export default Year2;
