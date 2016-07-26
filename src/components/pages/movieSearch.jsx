import _ from 'lodash';
import React, {Component} from 'react';
import Request from 'superagent';

import SearchBar from '../searchBar';
import MovieList from '../movieList';
import SuggestedMovie from '../suggestedMovie';

class MovieSearch extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movies: [],
			suggestedMovie: null,
			selectedMovie: null,
			defaultTerm: 'The Godfather'
		};

		this.movieSearch(this.state.defaultTerm);
	}

	movieSearch = (searchTerm) => {
		const url = 'http://www.omdbapi.com?s=' + searchTerm ;

		Request.get(url).then((response) => {
			this.setState({
				movies: response.body.Search,
				suggestedMovie: response.body.Search[0]
			});
		});
	}

	render() {
		const movieSearch = _.debounce((term) => {this.movieSearch(term)}, 300);

		return(
			<div>
				<SearchBar
					onSearchTermChange={movieSearch}
					defaultTerm={this.state.defaultTerm}
				></SearchBar>
				<SuggestedMovie
					movie={this.state.suggestedMovie}
				></SuggestedMovie>
				<MovieList
					movies={this.state.movies}
				></MovieList>
			</div>
		)


	}
}

export default MovieSearch;