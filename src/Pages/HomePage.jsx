import { useState, useEffect } from 'react';
import { Title } from '../components/MovieList/MovieList.styled';
import { getTrending } from 'API/api-servises';
import { Link as NavLink } from 'react-router-dom';
import Loader from 'components/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Pagination, PaginationItem, Stack } from '@mui/material';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageQty = 1000;

  useEffect(() => {
    setLoading(true);
    getTrending(page)
      .then(results => setMovies([...results]))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <>
      <Title>Trending Movies</Title>
      {loading && <Loader />}
      {movies && <MovieList movies={movies} page={page} />}
      {error && <p>Something went wrong, please try again later!</p>}
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            sx={{ marginY: 6, marginX: 'auto' }}
            renderItem={item => (
              <PaginationItem
                component={NavLink}
                to={`/?page=${page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
    </>
  );
};

export default HomePage;
