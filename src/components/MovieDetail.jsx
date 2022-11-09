import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import { Link } from 'react-router-dom';
export default function MovieDetail() {
  const params = useParams();
  
  const [movies, setMovies] = useState([        
    {
    "id":1,
      "title": "Star Wars: Episode IV - A New Hope",
    "description" :"Star Wars: Episode IV - A New Hope",
    "rating":5,
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "youtubeUrl":"vZ734NWnAHA"
  },
{
   "id":2, 
  "title": "Star Wars: Episode V - The Empire Strikes Back",
    "description":"Star Wars: Episode V - The Empire Strikes Back",
    "rating":4,
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "youtubeUrl":"JNwNXF9Y6kY"
},
{
   "id":3, 
  "title": "Star Wars: Episode VI - Return of the Jedi",
    "description":"Star Wars: Episode VI - Return of the Jedi",
    "rating":3,
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "youtubeUrl":"wtHQeMwlKro"


  }]);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{movies.find(element => element.id === parseInt(params.id)).title }</h1>
      <p>{movies.find(element => element.id === parseInt(params.id)).description }</p>
      <YoutubeEmbed embedId={movies.find(element => element.id === parseInt(params.id)).youtubeUrl } />
      
    </div>
   
  )
}
