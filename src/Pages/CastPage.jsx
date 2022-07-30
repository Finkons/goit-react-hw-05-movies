import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'API/api-servises';
import { Cast } from 'components/Cast';
import Loader from 'components/Loader';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCast(movieId)
      .then(results => setCast(results))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast && <Cast cast={cast} />}
      {error && <p>Something went wrong, please try again later!</p>}
    </>
  );
};

export default CastPage;
