import React from 'react';

const MovieDetail = ({selectedMovie}) => {

	console.log(selectedMovie);

	if(selectedMovie !== null){
		var movieTitle = selectedMovie.Title;
	}

	return(
		<div>
			<h1>{movieTitle}</h1>
		</div>
	)
}

export default MovieDetail;