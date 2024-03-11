/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BooksByGenrePage = () => {
  const {genreId} = useParams();
  const [books,setBooks] = useState([])

  useEffect(()=>{
    fetchBooksByGenre();
  },[genreId])

  const fetchBooksByGenre = async () =>{
    try{
      const response = await axios.get('http://localhost:8080/genres/${genreId}/books')
      setBooks(response.data)
    }catch(error){
      console.error("error in fetching books by genre : ",error)
    }
  }
  return (
    <div>
      <h2>Books in Genre</h2>
      <div>
        {books.map(book => (
          <div key={book.book_id}>
            <img src={book.book_url} alt={book.book_name} />
            <p>{book.book_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksByGenrePage;
