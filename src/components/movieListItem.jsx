import React from 'react';

const MovieListItem = ({movie}) => {

	var posterUrl = movie.Poster;	

	if(movie.Poster == 'N/A'){
		var posterUrl = 'http://yepmovie.com/wp-content/uploads/2014/02/notfound.png';
	}

	return(
		<div className="col-xs-6 col-md-3 movie-list-item" onClick={() => getMovieDetail(movie.imdbID)}>
			<img className="movie-poster" src={posterUrl} alt=""/>
			<div>
				<h5>{movie.Title}</h5>
				<small>{movie.Year}</small>
			</div>
		</div>
	)
}

export default MovieListItem;