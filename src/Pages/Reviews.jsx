import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Services/Api';
import Loader from '../components/Loader/Loader';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />};{error && <ErrorMsg message={error} />}
      {reviews !== null && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews