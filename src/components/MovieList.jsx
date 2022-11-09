import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<MovieCard movie={movie}/>
                
			))}
		</>
	);
};

export default MovieList;