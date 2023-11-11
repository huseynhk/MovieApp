import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieRouter = () => {
  const [movieDetail, setMovieDetail] = useState('');
  const { movieId } = useParams();

  const getMovieForPage = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${movieId}&apikey=fc1fef96`
      );
      if (response.status !== 200) {
        throw new Error("Error fetching product");
      } else {
        setMovieDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieForPage();
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
              className=" p-4 text-primary text-center fs-4 imgs col-lg-6 
              col-sm-12 d-flex justify-content-center flex-column"
            >
              <h4 className="text-danger fs-2 mb-3">{movieDetail.Title}</h4>
              <p>Year: {movieDetail.Year}</p>
              <p>Rated: {movieDetail.Rated}</p>
              <p>Released: {movieDetail.Released}</p>
              <p>Runtime: {movieDetail.Runtime}</p>
              <p>Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
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
