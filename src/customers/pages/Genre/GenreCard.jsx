/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const GenreCard = ({genre}) => {
  return (
    <div className="genre-card">
      <Link to={`/genres/${genre.genre_id}`}>
        <img src={genre.genre_url}/>
        <h3>{genre.genre_name}</h3>
      </Link>
    </div>
  );
};

export default GenreCard;
