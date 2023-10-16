import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Link, useParams, useLocation, NavLink, Routes, Route } from 'react-router-dom';
import { getMovieDetails } from '../Services/Api';
import Loader from '../components/Loader/Loader';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';
import { StyledDetailsContainer } from './Pages.styled';
const Cast = lazy(() => import('../Pages/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movieData = await getMovieDetails(movieId);
        setMovieDetails(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref.current}>
        <button type="button">Go back</button>
      </Link>
      {isLoading && <Loader />};{error && <ErrorMsg message={error} />}
      {movieDetails !== null && (
        <StyledDetailsContainer>
          <img
            className="movieImg"
            src={`${BASE_IMG_URL}/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div>
            <h1>{movieDetails.title}</h1>
            <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </StyledDetailsContainer>
      )}
      <h2>Additional information</h2>
      <div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
