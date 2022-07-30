import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API/api-servises';
import { Reviews } from 'components/Reviews/Reviews';
import Loader from 'components/Loader';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviews(movieId)
      .then(results => setReviews(results))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
      {error && <p>Something went wrong, please try again later!g</p>}
    </>
  );
};
export default ReviewsPage;
