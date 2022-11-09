
import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';
import MovieAdd from '../components/MovieAdd'; 
export default function Home() {
    const [filter, setFilter]=useState('');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [movies, setMovies] = useState([        
      {
      "id":1,
        "title": "Star Wars: Episode IV - A New Hope",
      "description" :"Star Wars: Episode IV - A New Hope",
      "rating":5,
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
     "id":2, 
    "title": "Star Wars: Episode V - The Empire Strikes Back",
      "description":"Star Wars: Episode V - The Empire Strikes Back",
      "rating":4,
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
     "id":3, 
    "title": "Star Wars: Episode VI - Return of the Jedi",
      "description":"Star Wars: Episode VI - Return of the Jedi",
      "rating":3,
      "posterURL": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }]);
  const [filtredMovies, setfiltredMovies] = useState([        
    {
      "id":1,
    "title": "Star Wars: Episode IV - A New Hope",
    "description" :"Star Wars: Episode IV - A New Hope",
    "rating":5,
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id":2,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "description":"Star Wars: Episode V - The Empire Strikes Back",
    "rating":4,
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id":3,
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "description":"Star Wars: Episode VI - Return of the Jedi",
    "rating":3,
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }]);
    function search (value){
      setFilter(value)
      setfiltredMovies([...movies.filter((movie)=>movie.title.includes(value))])  
    }
    function add(){
      let newMovie = {
        title:title,
        description:description,
        "posterURL": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  
      }
      setMovies([...movies,newMovie])
      setfiltredMovies([...movies,newMovie])
    }
  return (
    <div className='movies-div'>
       <Filter
        filter={filter} 
        onChange={(value)=>search(value)}
        search={search}
      />
      <div className='movies-app'>
      <MovieList movies={filtredMovies}  />
      </div>
      <MovieAdd   title={title}  description={description} 
        onChangeTitle={(value)=>setTitle(value)}
        onChangeDescription={(value)=>setDescription(value)}
        add={add}/> 
    </div>
  )
}
