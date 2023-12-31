import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GetMovies } from "../../../api/GetRequest";
import { ROUTER } from "../../../constant/Router";

const SecondPart = () => {
  const [datas, setDatas] = useState([]);

  const fetchMovies = async () => {
    const response = await GetMovies();
    const allMovies = response ? response.Search : [];

    const between1975and2000 = allMovies.filter(
      (movie) => parseInt(movie.Year) >= 1975 && parseInt(movie.Year) <= 2000
    );
    setDatas(between1975and2000);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Helmet>
        <title>1975-2000</title>
      </Helmet>
      <div className="d-flex flex-wrap h-100 justify-content-center align-items-center ">
        {datas ? (
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

                <p className="cursor">
                  <Link
                    className="cursor mb-3"
                    to={`${ROUTER.MovieRouter}/${movie.imdbID}`}
                  >
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
    </>
  );
};

export default SecondPart;
