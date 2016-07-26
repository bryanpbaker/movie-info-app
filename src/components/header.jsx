import React from 'react';
import {Link} from 'react-router';

const Header = () => {
	return(
		<div className="header col-xs-12">
			<div className="navbar navbar-dark bg-danger">
				<Link to="/" className="navbar-brand"><i className="fa fa-ticket"></i> Movie App</Link>
				<ul className="navbar-nav nav pull-right">
					<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
					<li className="nav-item"><Link className="nav-link" to="/search">Search</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Header;