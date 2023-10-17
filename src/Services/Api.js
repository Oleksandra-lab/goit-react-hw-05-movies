import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const MY_KEY = '74e3875ddbdb3d01b8afddc4b578738c';

export const getMoviesTrends = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${MY_KEY}`);
  // console.log(data.results);
  return data.results;
};

export const findMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${MY_KEY}&query=${query}`
  );
  console.log(data.results)
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${MY_KEY}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${MY_KEY}`
  );
  return data.cast;
};
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${MY_KEY}`
  );
  return data.results;
};
