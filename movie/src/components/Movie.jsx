// Title: https://omdbapi.com/?s=all&page=1&apikey=fc1fef96
import React, { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GetMovies, GetSearchMovies } from "../api/GetRequest";

const Movie = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const fetchMovies = async () => {
    const response = await GetMovies();
    setDatas(response ? response.Search : []);
  };

  const fetchSearchMovies = async () => {
    const response = await GetSearchMovies(search);
    setDatas(response ? response.Search : []);
  };

  const resetMovies = () => {
    fetchMovies();
    setSearch("");
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

  useEffect(() => {
    fetchSearchMovies();
  }, [search]);

  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <div className="d-flex justify-content-center flex-column">
          <div className="input-group w-100 border border-primary rounded mt-5">
            <input
              type="text"
              className="form-control "
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            onClick={resetMovies}
            className="btn btn-dark border border-light-subtle mt-2"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {datas ? (
          datas.map((movie, index) => (
            <div
              key={index}
              className="card m-2 border-white"
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

export default Movie;