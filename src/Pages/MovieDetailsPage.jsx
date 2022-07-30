import { useState, useEffect, lazy } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';

import { getDetails } from 'API/api-servises';
import Loader from 'components/Loader';
import { MovieDetails } from 'components/MovieDetails';
import { Button } from '../components/MovieDetails/MovieDetails.styled';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    setLoading(true);
    getDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Button type="button" onClick={onGoBack}>
        Go back
      </Button>
      {loading && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <p>Something went wrong, please try again later!</p>}
      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
