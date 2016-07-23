import React from 'react';

const MovieListItem = ({movie, getMovieDetail}) => {

	// console.log(movie);

	var posterUrl = movie.Poster;	

	if(movie.Poster == 'N/A'){
		var posterUrl = 'http://yepmovie.com/wp-content/uploads/2014/02/notfound.png';
	}

	return(
		<div className="col-xs-12 col-sm-6 col-xl-3 movie-list-item" onClick={() => getMovieDetail(movie.imdbID)}>
			<img className="movie-poster" src={posterUrl} alt=""/>
			<div>
				<h5>{movie.Title}</h5>
				<small>{movie.Year}</small>
			</div>
		</div>
	)
}

export default MovieListItem;