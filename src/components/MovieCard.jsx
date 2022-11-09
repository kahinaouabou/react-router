import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function MovieCard(props) {
  const navigate = useNavigate();
  return (
                <div className='image-container d-flex justify-content-start m-3 movie-card'>
					<img src={props.movie.posterURL} alt='movie'></img>
                    <p className='title'>{props.movie.title}</p>
                    <button className='btn-primary' onClick={() =>
                navigate(`/MovieDetail/${props.movie.id}`)}>View details</button>
				</div>
  )
}
