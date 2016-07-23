import React from 'react';
import {Link} from 'react-router';

const Header = () => {
	return(
		<div className="header col-xs-12">
			<h1>Header</h1>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/search">Search</Link></li>
			</ul>
		</div>
	)
}

export default Header;