/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const GenreCard = ({genre}) => {
  
  return (
    <div>
      <Link to={`/genres/${genre.genre_id}`} key={genre.genre_id}>
            <img src={genre.genre_url} alt={genre.genre_name} />
          </Link>
    </div>
  );
};

export default GenreCard;
