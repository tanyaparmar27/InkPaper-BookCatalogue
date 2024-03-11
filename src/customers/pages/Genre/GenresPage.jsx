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
      <h2 className="text-3xl font-semibold mb-4 mx-auto"><center>Genres</center></h2>
      <div className="grid grid-cols-3 gap-4">
        {genres.map(genre => (
          <div key={genre.genre_id} className="h-auto max-w-full rounded-lg" >
            <GenreCard genre={genre} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenresPage