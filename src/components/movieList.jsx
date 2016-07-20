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
			/>
		)
	});

	return(
		<div className="card-deck-wrapper movie-list">
			<div className="card-deck">
				{movies}
			</div>
		</div>
	)
}

export default MovieList;