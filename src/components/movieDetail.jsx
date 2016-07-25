import React, {Component} from 'react';

import Request from 'superagent';

class MovieDetail extends Component {

	constructor(props){
		super(props);

		const movieId = (this.props.location.query.id);

		this.state = {
			selectedMovie: movieId
		}

		this.movieDetail(this.state.selectedMovie);
	}


	movieDetail = (movieId) => {
		const detailUrl = 'http://www.omdbapi.com/?i=' + movieId + '&plot=full&tomatoes=true'

		Request.get(detailUrl).then((response) => {
			this.setState({
				currentMovie: response.body
			});

		});
	}

	render() {

		if(this.state.currentMovie) {
			console.log(this.state.currentMovie);
			var movie = this.state.currentMovie;
			var movieTitle = movie.Title;
			var movieYear = movie.Year
			var moviePoster = movie.Poster;
			var movieRating = movie.Rated;
			var moviePlot = movie.Plot;
			var movieWriters = movie.Writer;
			var movieDirector = movie.Director;
			var movieActors = movie.Actors;
			var movieGenre = movie.Genre;
			var movieProduction = movie.Production;
			var movieRuntime = movie.Runtime;

			if(movie.tomatoImage === 'certified'){
				var tomatoImg = 'http://d3biamo577v4eu.cloudfront.net/static/images/icons/cf-lg.png';
			} else if(movie.tomatoImage === 'fresh') {
				var tomatoImg = 'http://images.rottentomatoescdn.com/images/trademark/fresh.png';
			} else{
				var tomatoImg = 'http://d3biamo577v4eu.cloudfront.net/static/images/trademark/rotten.png';
			}

			var tomatoMeter = movie.tomatoMeter;
			var tomatoURL = movie.tomatoURL;
			var tomatoReviews = movie.tomatoReviews;
		}

		return(
			<div className="movie-detail">
				<h1>{movieTitle}</h1>
				<div className="poster-container">
					<img src={moviePoster} alt=""/>
				</div>
				<div className="meta-info">
					<h4 className="year-rating">{movieYear} / Rated: {movieRating}</h4> 
					<small className="movie-genre">{movieGenre} / Runtime: {movieRuntime}</small>
					<h4 className="tomatoes"><img className="tomato-img" src={tomatoImg} alt=""/> <b>{tomatoMeter}% <small>({tomatoReviews} reviews)</small></b></h4>
					<small>
						<a target="_blank" href={tomatoURL}>View on Rotten Tomatoes</a>
					</small>
				</div>
				<br/>
				<p>{moviePlot}</p>
				<div className="credits">
					<small>Directed by: {movieDirector}</small>
					<small>Starring: {movieActors}</small>
					<small>Written by: {movieWriters}</small>
					<small>A {movieProduction} production</small>
				</div>
			</div>
		)
	}
}

export default MovieDetail;