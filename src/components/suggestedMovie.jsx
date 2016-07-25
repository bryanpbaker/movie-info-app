import {Link} from 'react-router';
import React from 'react';


const SuggestedMovie = ({movie}) => {

	if(movie !== null){
		var movieTitle = movie.Title;
		var movieYear = movie.Year;
		var moviePoster = movie.Poster;
	}

	const scrollToList = () => {
		document.querySelector('.movie-list').scrollIntoView({block: 'start', behavior: 'smooth'});
	}

	var link = movie.Title.replace(/[^A-Z0-9]/ig, "-").toLowerCase();
	var movieLink = link + '?id=' + movie.imdbID;

	return(
		<div className="suggested-movie col-xs-12">
			<div className="col-xs-12">
				<h1>Are you looking looking for {movieTitle} ?</h1>
			</div>
			<div className="col-sm-8 col-md-5 movie-poster-container">
				<img className="img-responsive" src={moviePoster} alt=""/>
			</div>
			<div className="buttons">
				<Link to={movieLink}>
					<button className="btn btn-success">Yes!</button>
				</Link>
				<button onClick={() => scrollToList()} className="btn btn-danger">Nope</button>
			</div>
		</div>
	)
}



export default SuggestedMovie;
