import { axios } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd830553544ab88a00e6845a92b10c528';

export const getTrendigMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    return console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
