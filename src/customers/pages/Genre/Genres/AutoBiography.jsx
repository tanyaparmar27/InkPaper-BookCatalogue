import { useEffect, useState } from "react"
import axios from "axios"

function AutoBiography() {
  const [autobiographyBooks,setAutobiographyBooks] = useState([]);

  //fetching from backend on mounting
  useEffect(()=>{
    loadAutobiographyBooks();
  },[]);

  //fetching genres from backend
  const loadAutobiographyBooks = async() =>{
    const result = await axios.get("http://localhost:8080/genres/autobiography")  
    setAutobiographyBooks(result.data)
  }
  return (
    <div className="text-center">AutoBiography</div>
  )
}

export default AutoBiography