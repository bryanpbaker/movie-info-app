import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Request from 'superagent';

import SearchBar from './components/searchBar';
import MovieList from './components/movieList';
import SuggestedMovie from './components/suggestedMovie';
import MovieDetail from './components/movieDetail';

// main app component
class App extends Component {

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
				movies: response.body,
				suggestedMovie: response.body.Search[0]
			});
		});
	}

	movieDetail = (movieId) => {
		const detailUrl = 'http://www.omdbapi.com/?i=' + movieId + '&plot=full&tomatoes=true'

		Request.get(detailUrl).then((response) => {
			this.setState({
				selectedMovie: response.body
			});
		});
	}


	render() {

		const movieSearch = _.debounce((term) => {this.movieSearch(term)}, 300);

		return(
			<div>
				<SearchBar onSearchTermChange={movieSearch} />
				<SuggestedMovie movie={this.state.suggestedMovie} />
				<MovieList 
					movies={this.state.movies.Search} 
					getMovieDetail={(movieId) => this.movieDetail(movieId)}
				/>
			</div>
		)
	};

}


// render to Dom
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/detail" component={MovieDetail}/>
	</Router>
), document.querySelector('.container'));
