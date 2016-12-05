import React from 'react';
import NewPlaylist from '../components/NewPlaylist';


export default class NewPlaylistContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			inputValue: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({inputValue : event.target.value});
	}

	handleSubmit(event) {
		console.log(this.state.inputValue);
		event.preventDefault();
		this.setState({inputValue : ''})
	}


	render() {
		return(
		<div>
		<NewPlaylist onSubmit={this.handleSubmit} onChange={this.handleChange} inputValue = {this.state.inputValue}/>
		</div>
		)
	}
}
