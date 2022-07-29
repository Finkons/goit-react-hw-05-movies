import PropTypes from 'prop-types';
import { ReviewsContainer, List } from './Reviews.styled';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <ReviewsContainer>
        <List>
          {reviews.map(({ id, created_at, content, author }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{created_at}</p>
              <p>{content}</p>
            </li>
          ))}
        </List>
      </ReviewsContainer>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
