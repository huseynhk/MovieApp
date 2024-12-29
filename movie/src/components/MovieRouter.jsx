import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetMovieForPage } from "../api/GetRequest";
import { Helmet } from "react-helmet-async";

const MovieRouter = () => {
  const [movieDetail, setMovieDetail] = useState("");
  const { movieId } = useParams();

  const fetchMovieForPage = async () => {
    const response = await GetMovieForPage(movieId);
    setMovieDetail(response);
  };

  useEffect(() => {
    fetchMovieForPage();
  }, [movieId]);

  return (
    <>
      <Helmet>
        <title>Movie Details</title>
      </Helmet>
      <div>
        {movieDetail ? (
          <div className="h-100 w-100  row  mt-3">
            <div className="col-lg-6 col-sm-12 ">
              <img src={movieDetail.Poster} className="imgs w-100" />
            </div>
            <div
              className=" p-4 text-white text-center fs-5 imgs col-lg-6 
              col-sm-12 d-flex justify-content-center flex-column"
            >
              <h3 className="text-danger fs-2 mb-3 truncate">
                {movieDetail.Title}
              </h3>
              <p>Year: {movieDetail.Year}</p>
              <p>Rated: {movieDetail.Rated}</p>
              <p>Released: {movieDetail.Released}</p>
              <p>Runtime: {movieDetail.Runtime}</p>
              <p className="text-warning">Imdb: {movieDetail.imdbRating}</p>
              <p>Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
              <p className="truncate">Plot: {movieDetail.Plot}...</p>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{height:"30vh"}}>
            <h3 style={{color:"#c7ff6c"}} className="text-center font-weight-bolder">
              Loading...
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieRouter;
