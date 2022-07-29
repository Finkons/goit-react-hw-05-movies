import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MDContainer,
  Img,
  Info,
  MoreInformation,
  Link,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const genresAll = genres.map(genre => genre.name).join(', ');
  const location = useLocation();

  return (
    <>
      <MDContainer>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={original_title}
        />
        <Info>
          <h1>{original_title}</h1>
          <h2> ({release_date})</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresAll}</p>
        </Info>
      </MDContainer>
      <MoreInformation>
        <Link to="cast" state={location.state}>
          Cast
        </Link>
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </MoreInformation>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
