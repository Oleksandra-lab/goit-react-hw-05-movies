import React, { useState, useEffect } from 'react';
import { getMoviesTrends } from '../Services/Api';
import  Loader  from '../components/Loader/Loader';
import  ErrorMsg  from '../components/ErrorMsg/ErrorMsg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const dataMovies = await getMoviesTrends();
        setMovies(dataMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMsg message={error} />}
      <h1>Trending today</h1>
      {movies !== null &&
        movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <li>{movie.title}</li>
          </Link>
        ))}
    </div>
  );
};

export default Home