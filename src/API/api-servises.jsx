import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '250f014fd6a936550e378176122f5d39';

export const searchMovies = async (query, page) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}&include_adult=true`
  );
  return response.data.results;
};

export const getTrending = async page => {
  const response = await axios.get(
    `/trending/all/week?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
