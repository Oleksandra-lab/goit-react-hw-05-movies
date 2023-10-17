import React, { useState, useEffect } from 'react';
import { findMovieByQuery } from '../Services/Api';
import Loader from '../components/Loader/Loader';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const dataMovie = await findMovieByQuery(query);
        console.log(dataMovie);
        setMovies(dataMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const searchValue = evt.target.searchMovieTitle.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            <input type="text" name="searchMovieTitle" required />
            <button type="submit">Search</button>
          </label>
        </form>
      </div>
      <section>
        {isLoading && <Loader />}
        {error && <ErrorMsg message={error} />}
        {movies !== null &&
          movies.map(movie => (
            <Link
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              key={movie.id}
            >
              <li>{movie.title}</li>
            </Link>
          ))}
      </section>
    </>
  );
};

export default Movies;
