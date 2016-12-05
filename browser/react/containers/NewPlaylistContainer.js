import React from 'react';
import NewPlaylist from '../components/NewPlaylist';


export default class NewPlaylistContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			dirty : false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			inputValue : event.target.value,
			dirty : true
		});
	}

	handleSubmit(event) {
		console.log(this.state.inputValue);
		event.preventDefault();
		this.setState({inputValue : ''})
	}


	render() {
		let alertMessage;
		if (this.state.inputValue.length > 16 || !this.state.inputValue && this.state.dirty) alertMessage = "Please enter valid playlist name!";
		return(
		<div>
		<NewPlaylist onSubmit={this.handleSubmit} onChange={this.handleChange} inputValue = {this.state.inputValue} alertMessage = {alertMessage}/>
		</div>
		)
	}
}
