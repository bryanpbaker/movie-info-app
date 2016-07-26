import React, {Component} from 'react';


class SearchBar extends Component {

	constructor(props) {
		super(props);

		console.log(props);

		this.state = {term : props.defaultTerm}
	};

	render() {
		return(
			<div className="search-bar">
				<input 
				type="text"
				onChange={ event => this.onInputChange(event.target.value) }  
				value={this.state.term}
			/>
			</div>
		)
	};

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}



export default SearchBar;