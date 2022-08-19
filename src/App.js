import React, { useState }  from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=6a60f417'


const App = () =>{

   const [movies,SetMovies] = useState([])
   const[searchTerm,setSearchTerm] = useState([])

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    SetMovies(data.Search);
   }

   useEffect(()=>{
    searchMovies('Superman')
   },[]);

   return(
    <div className="app">

     <h1>s'MovieLand</h1>

     <div className="search">

      <input
      placeholder="search for movies"
      value={searchTerm}
      onChange={ (e) => setSearchTerm(e.target.value) }
      />

      <img
      src={SearchIcon}
      alt="search"
      onClick={ () => searchMovies(searchTerm) }
      />

     </div>

     {
       movies?.length > 0

       ? (<div className="container">
            {movies.map((movie)=>(
             <MovieCard movie={movie} />
            ))}
          </div>)
           :
            (
          <div className="empty">
           <h2>No movies found</h2>
          </div>
        )
     }
 
    </div>
   )
}

export default App