import PropTypes from 'prop-types';
import { CastBox, List, Item, Img, Name } from './Cast.styled';

export const Cast = ({ cast }) => {
  return (
    <CastBox>
      <List>
        {cast.map(({ id, original_name, profile_path }) => (
          <Item key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
              }
              alt={original_name}
            />
            <Name>{original_name}</Name>
          </Item>
        ))}
      </List>
    </CastBox>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
