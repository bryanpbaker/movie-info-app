import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

// Layout
import Header from './components/header';
import Footer from './components/footer';

// Pages
import Home from './components/pages/home';
import MovieSearch from './components/pages/movieSearch';
import MovieDetail from './components/movieDetail';

// main app component
class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div className="app">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	};

}


// render to Dom
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="search" component={MovieSearch} />
			<Route path=":movieId" component={MovieDetail}></Route>
		</Route>
	</Router>
), document.querySelector('.container'));




// <SearchBar onSearchTermChange={movieSearch} />
// <SuggestedMovie movie={this.state.suggestedMovie} />
// <MovieList 
// 	movies={this.state.movies.Search} 
// 	getMovieDetail={(movieId) => this.movieDetail(movieId)}
// />