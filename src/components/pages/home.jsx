import React, {Component} from 'react';

const Home = (props) => {

	return(
		<div className="home">
			<div className="hidden-md-down col-md-3">
				<i className="fa fa-film"></i>
			</div>
			<div className="col-md-9">
				<h1>Find Your Favorite Movie</h1>
				<p>Looking for info about a movie you love? Having a hard time thinking of which actor played your favorite character? Interested in who directed your favorite film? You have come to the right place. Just go to the Search page and type the name of your movie, you will then be able to access lots of different information; including reviews, plot, actors, directors and more!</p>
			</div>
		</div>
	)
}

export default Home;