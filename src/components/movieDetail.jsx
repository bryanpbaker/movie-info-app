import React from 'react';


const MovieDetail = ({movie}) => {

	if(movie !== null){
		var movieTitle = movie.Title;
		var movieYear = movie.Year;
		var moviePoster = movie.Poster;

		console.log(movie);
	}

	return(
		<div className="movie-detail col-md-6">
			<img src={moviePoster} alt=""/>
			<br/>
			{movieTitle}
			<br/>
			{movieYear}
		</div>
	)
}



export default MovieDetail;
