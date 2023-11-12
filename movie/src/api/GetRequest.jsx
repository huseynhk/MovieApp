// Detail: https://www.omdbapi.com/?i=tt0103064&apikey=fc1fef96
import axios from "axios";

const omdbApi = axios.create({
  baseURL: "https://omdbapi.com",
  params: {
    apikey: "fc1fef96",
  },
});

export const GetMovies = async () => {
  try {
    const response = await omdbApi.get("/?s=all&page=3");
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
      const response = await omdbApi.get(`/?s=${search}`);
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
    const response = await omdbApi.get(`/?i=${imdbID}`);
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
    const response = await omdbApi.get(`/?i=${movieId}`);
    if (response.status !== 200) {
      throw new Error("Error fetching product");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
