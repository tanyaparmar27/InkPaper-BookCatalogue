/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import GenreCard from './GenreCard'
import axios from "axios"

const GenresPage = () => {
  const [genres,setGenre]=useState([])

  //fetching from backend on mounting
  useEffect(()=>{
    loadGenres();
  },[]);

  //fetching genres from backend
  const loadGenres = async() =>{
    const result = await axios.get("http://localhost:8080/genres")  
    setGenre(result.data)
  }


  return (
    <div>
      <h2>Genres</h2>
      <div className="genre-page">
      {genres?.map(genre => (
          <GenreCard key={genre.genre_id} genre={genre} />
        ))}
      </div>
    </div>
  );
}
  


export default GenresPage