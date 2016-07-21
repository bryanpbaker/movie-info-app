import _ from 'lodash';
import React from 'react';

import MovieListItem from './movieListItem';

const MovieList = (props) => {

	if(!props.movies){
		return (
			<div className="col-xs-12 loading">
				<i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
			</div>
		)
	}

	const movies = _.map(props.movies, (movie) => {
		return(
			<MovieListItem 
				key={movie.imdbID} 
				movie={movie}
				getMovieDetail={() => props.getMovieDetail}
			/>
		)

		console.log(props)
	});

	return(
		<div className="movie-list col-xs-12">
			<div className="col-xs-12">
				<h4>Or maybe one of these movies?</h4>
			</div>
			{movies}
		</div>
	)
}

export default MovieList;