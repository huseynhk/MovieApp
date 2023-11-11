import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetMovieForPage } from "../api/GetRequest";

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
      <div>
        {movieDetail ? (
          <div className="h-100 w-100  row  mt-3">
            <div className="col-lg-6 col-sm-12 ">
              <img src={movieDetail.Poster} className="imgs w-100" />
            </div>
            <div
              className=" p-4 text-white text-center fs-4 imgs col-lg-6 
              col-sm-12 d-flex justify-content-center flex-column"
            >
              <h4 className="text-warning fs-1 mb-3">{movieDetail.Title}</h4>
              <p>Year: {movieDetail.Year}</p>
              <p>Rated: {movieDetail.Rated}</p>
              <p>Released: {movieDetail.Released}</p>
              <p>Runtime: {movieDetail.Runtime}</p>
              <p>Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
              <p>Imdb: {movieDetail.imdbRating}</p>
              <p>Plot: {movieDetail.Plot.slice(0, 100)}...</p>
            </div>
          </div>
        ) : (
          <h3 className="text-danger text-center">Loading...</h3>
        )}
      </div>
    </>
  );
};

export default MovieRouter;
