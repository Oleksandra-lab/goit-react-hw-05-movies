import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../Services/Api';
import Loader from '../components/Loader/Loader';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const castData = await getMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />};{error && <ErrorMsg message={error} />}
      {cast !== null && (
        <ul>
          {cast.map(({ cast_id, name, character, profile_path }) => {
            return (
              <li key={cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;
