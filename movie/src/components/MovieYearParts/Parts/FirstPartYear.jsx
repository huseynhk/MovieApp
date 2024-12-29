import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GetMovies } from "../../../api/GetRequest";
import { ROUTER } from "../../../constant/Router";

const FirstPartYear = () => {
  const [datas, setDatas] = useState([]);

  const fetchMovies = async () => {
    const response = await GetMovies();
    const allMovies = response ? response.Search : [];

    const between1950and1975 = allMovies.filter(
      (movie) => parseInt(movie.Year) >= 1950 && parseInt(movie.Year) <= 1975
    );
    setDatas(between1950and1975);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Helmet>
        <title>1950-1975</title>
      </Helmet>
      <div className="d-flex flex-wrap justify-content-center align-items-center ">
        {datas ? (
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

export default FirstPartYear;
