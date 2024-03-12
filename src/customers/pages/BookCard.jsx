/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {
  const bookNameInUrl = book.book_name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to={`/books/${bookNameInUrl}`}>
            <img src={book.book_url}
                    alt={book.book_name} className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-2xl font-bold text-black truncate block capitalize">{book.book_name}</p>
                <div className="flex items-center">
                    <p className="text-1l font-semibold text-black cursor-auto my-3"> By {book.book_author}</p>
                </div>
            </div>
        </Link>
    </div>
    </div>
  );
};

export default BookCard;



