// Detail: https://www.omdbapi.com/?i=tt0103064&apikey=fc1fef96
import axios from "axios";

export const GetMovies = async () => {
  try {
    const response = await axios.get(
      "https://omdbapi.com/?s=all&page=1&apikey=fc1fef96"
    );
    if (response.status !== 200) {
      throw new Error("Error fetching product");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const GetSearchMovies = async (search) => {
  if (search !== "") {
    try {
      const response = await axios.get(
        `https://omdbapi.com/?s=${search}&page=1&apikey=fc1fef96`
      );
      if (response.status !== 200) {
        throw new Error("Error fetching product");
      } else {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const GetMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=fc1fef96`
    );
    if (response.status !== 200) {
      throw new Error("Error fetching product");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const GetMovieForPage = async (movieId) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=fc1fef96`
    );
    if (response.status !== 200) {
      throw new Error("Error fetching product");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};


