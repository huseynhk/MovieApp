// Detail: https://www.omdbapi.com/?i=tt0103064&apikey=fc1fef96
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

const MovieDetails = ({ selectedMovie, show, closeModal }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetails = async () => {
    if (selectedMovie) {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=fc1fef96`
        );
        if (response.status !== 200) {
          console.log("Wrong");
        } else {
          setMovieDetail(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [selectedMovie]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Modal show={show} onHide={closeModal} >
      <Modal.Body>
        {movieDetail ? (
          <div>
            <img src={movieDetail.Poster} className="img" />
            <div className="mt-2 p-1 text-primary">
              <h4 className="text-danger">{movieDetail.Title}</h4>
              <p>Year: {movieDetail.Year}</p>
              <p>Rated: {movieDetail.Rated}</p>
              <p>Released: {movieDetail.Released}</p>
              <p>Runtime: {movieDetail.Runtime}</p>
              <p>Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
              <p>Plot: {movieDetail.Plot.slice(0, 45)}...</p>
            </div>
          </div>
        ) : (
          <h3 className="text-danger text-center">Loading...</h3>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={closeModal} className="btn btn-danger px-5 py-2">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetails;
