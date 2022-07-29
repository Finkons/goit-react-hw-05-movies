import PropTypes from 'prop-types';
import { MLContainer, List } from './MovieList.styled';
import { MovieListItem } from 'components/MovieList/MovieListItem/MovieListItem';

export const MovieList = ({ movies }) => {
  return (
    <MLContainer>
      <List>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </MLContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
