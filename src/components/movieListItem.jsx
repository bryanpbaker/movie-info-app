import React from 'react';

const MovieListItem = ({movie}) => {

	const posterUrl = movie.Poster;

	return(
		<div className="col-xs-12 col-md-4 card text-xs-center">
			<img className="card-img-top movie-poster" src={posterUrl} alt=""/>
			<div className="card-block">
				<h4 className="card-title">{movie.Title}</h4>
				<small>{movie.Year}</small>
			</div>
		</div>
	)
}

export default MovieListItem;