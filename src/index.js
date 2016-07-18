import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';

import SearchBar from './components/searchBar';
import MovieList from './components/movieList';


// main app component
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {};

		this.movieSearch('batman');
	}

	movieSearch = (searchTerm) => {
		const url = 'http://www.omdbapi.com?s=' + searchTerm ;

		Request.get(url).then((response) => {
			this.setState({
				movies: response.body.Search,
			});
		});
	}

	render() {

		const movieSearch = _.debounce((term) => {this.movieSearch(term)}, 300);

		return(
			<div>
				<SearchBar onSearchTermChange={movieSearch} />
				<MovieList movies={this.state.movies} />
			</div>
		)
	};

}


// render to Dom
ReactDOM.render(<App/>, document.querySelector('.container'));
