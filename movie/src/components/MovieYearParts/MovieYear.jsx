import React, { useState, useEffect } from "react";
import { GetMovies } from "../../api/GetRequest";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ROUTER } from "../../constant/Router";
import Years from "./Parts/Years";

const MovieYear = () => {
  const [datas, setDatas] = useState([]);

  const fetchMovies = async () => {
    const response = await GetMovies();
    const allMovies = response ? response.Search : [];

    const moviesBetween1950And2000 = allMovies.filter(
      (movie) => parseInt(movie.Year) >= 1950 && parseInt(movie.Year) <= 2000
    );
    setDatas(moviesBetween1950And2000);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Helmet>
        <title>1950-2000</title>
      </Helmet>
  
        <Years />
    
      <div className="d-flex flex-wrap  justify-content-center align-items-center ">
        {datas ? (
          datas.map((movie, index) => (
            <div
              key={index}
              className="card m-4 border-white "
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

                <p className="cursor">
                  <Link
                    className="cursor mb-3"
                    style={{ color: "#c7ff6c" }}
                    to={`${ROUTER.MovieRouter}/${movie.imdbID}`}
                  >
                    Go Detail Page
                  </Link>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "30vh" }}
          >
            <h1 style={{ color: "#c7ff6c" }} className=" text-center mt-5">
              Not Found...
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieYear;
