/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {
  const bookNameInUrl = book.book_name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <Link to={`/books/${bookNameInUrl}`}>
        <img src={book.book_url} alt={book.book_name} />
      </Link>
    </div>
  );
};

export default BookCard;
