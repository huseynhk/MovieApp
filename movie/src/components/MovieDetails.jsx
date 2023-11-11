import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { GetMovieDetails } from "../api/GetRequest";

const MovieDetails = ({ selectedMovie, show, closeModal }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  const fetchMovieDetails = async () => {
    if (selectedMovie && selectedMovie.imdbID) {
      const response = await GetMovieDetails(selectedMovie.imdbID);
      setMovieDetail(response);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [selectedMovie]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Body>
        {movieDetail ? (
          <div>
            <img src={movieDetail.Poster} className="img" />
            <div className="mt-2 p-1 text-primary">
              <h4 className="text-danger">{movieDetail.Title}</h4>
              <p>Year: {movieDetail.Year}</p>
              <p>Imdb: {movieDetail.imdbRating}</p>
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
