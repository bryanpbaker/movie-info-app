import React from 'react';
import {Link} from 'react-router';

const MovieListItem = ({movie, getMovieDetail}) => {

	// console.log(movie);

	var posterUrl = movie.Poster;	

	// Need to replace colons and spaces with hyphens
	// var link = movie.Title.replace(/\s+/g, '-').toLowerCase();

	if(movie.Poster == 'N/A'){
		var posterUrl = 'http://yepmovie.com/wp-content/uploads/2014/02/notfound.png';
	}

	return(
		<div className="col-xs-12 col-sm-6 col-xl-3 movie-list-item" onClick={() => getMovieDetail(movie.imdbID)}>
			<Link to={link}>
				<img className="movie-poster" src={posterUrl} alt=""/>
				<div>
					<h5>{movie.Title}</h5>
					<small>{movie.Year}</small>
				</div>
			</Link>
		</div>
		
	)
}

export default MovieListItem;