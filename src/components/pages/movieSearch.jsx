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
			selectedMovie: null
		};

		this.movieSearch('batman');
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

	movieDetail = (movieId) => {
		const detailUrl = 'http://www.omdbapi.com/?i=' + movieId + '&plot=full&tomatoes=true'

		Request.get(detailUrl).then((response) => {
			console.log(response);
			this.setState({
				selectedMovie: response.body
			});
		});
	}

	render() {
		const movieSearch = _.debounce((term) => {this.movieSearch(term)}, 300);

		return(
			<div>
				<SearchBar
					onSearchTermChange={movieSearch}
				></SearchBar>
				<SuggestedMovie
					movie={this.state.suggestedMovie}
				></SuggestedMovie>
				<MovieList
					movies={this.state.movies}
					getMovieDetail={ movieId => this.movieDetail(movieId) }
				></MovieList>
			</div>
		)


	}
}

export default MovieSearch;