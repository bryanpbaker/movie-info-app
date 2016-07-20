import React from 'react';

const MovieListItem = ({movie}) => {

	var posterUrl = movie.Poster;	

	if(movie.Poster == 'N/A'){
		var posterUrl = 'http://yepmovie.com/wp-content/uploads/2014/02/notfound.png';
	}

	return(
		<div className="col-xs-12 col-md-6 card text-xs-center movie-list-item">
			<img className="card-img-top movie-poster" src={posterUrl} alt=""/>
			<div className="card-block">
				<h4 className="card-title">{movie.Title}</h4>
				<small>{movie.Year}</small>
			</div>
		</div>
	)
}

export default MovieListItem;