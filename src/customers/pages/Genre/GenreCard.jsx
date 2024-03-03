/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const GenreCard = ({genre}) => {
  const genreNameInUrl = genre.genre_name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="genre-card">
      <Link to={`/genres/${genreNameInUrl}`}>
        <img src={genre.genre_url} alt={genre.genre_name} />
      </Link>
      <h3 className="text-center">{genre.genre_name}</h3>
    </div>
  );
};

export default GenreCard;
