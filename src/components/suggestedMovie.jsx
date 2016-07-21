import React from 'react';


const SuggestedMovie = ({movie}) => {

	if(movie !== null){
		var movieTitle = movie.Title;
		var movieYear = movie.Year;
		var moviePoster = movie.Poster;
	}

	return(
		<div className="suggested-movie col-xs-12">
			<div className="col-xs-12">
				<h1>Are you looking looking for {movieTitle} ?</h1>
			</div>
			<div className="col-xs-12 movie-poster-container">
				<img src={moviePoster} alt=""/>
			</div>
		</div>
	)
}



export default SuggestedMovie;
