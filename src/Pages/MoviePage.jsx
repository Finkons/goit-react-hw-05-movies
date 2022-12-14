import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Notiflix from 'notiflix';
import { Form, Input, Button } from 'components/Header/Header.styled';
import { searchMovies } from 'API/api-servises';
import Loader from 'components/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = element => {
    setSearchQuery(element.currentTarget.value);
  };
  const onFormSubmit = element => {
    element.preventDefault();

    const newQuery = element.target.elements.query.value.toLowerCase();
    if (newQuery.trim() === '') {
      Notiflix.Notify.failure("Please, enter correct movie's name");
      return;
    }
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      setLoading(true);
      searchMovies(newQuery)
        .then(results => {
          results.length !== 0
            ? setMovies([...results])
            : Notiflix.Notify.failure(
                "Sorry, we didn't find any movies matching your search. Please, try again"
              );
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
      setSearchQuery(searchParams.get('query'));
    }
  }, [searchParams]);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          type="text"
          name="query"
          value={searchQuery}
          onChange={handleChange}
          autoFocus={true}
        />
        <Button type="submit">
          <BsSearch size={30} color={'white'} />
        </Button>
      </Form>
      {loading && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>Something went wrong, please try again later!</p>}
    </>
  );
};

export default MoviePage;
