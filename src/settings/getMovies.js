import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd830553544ab88a00e6845a92b10c528';

const getTrendigMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
};

const getSearchMovies = async value => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

export {
  getTrendigMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getSearchMovies,
};
