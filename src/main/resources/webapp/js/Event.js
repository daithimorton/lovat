import React from 'react';
import axios from 'axios';

class Event extends React.Component {
	constructor(props){
  	super(props);
  	this.state = {
			data : props.data,
			key: props.key,
			url: props.url
		};

		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
	}

	edit(){
	}

	remove(){
		const requestUrlWithParam = this.state.url + '/' + this.state.data.id;
		axios.delete(requestUrlWithParam).then(function(res) {
		});
	}

	render(){
		return (
			<li className='EventsList-item' key={this.state.data.id}>
				<h2 className='EventsListItem-name'>{this.state.data.name}</h2>
				<div>{this.state.data.description}</div>
				<div>{this.state.data.location}</div>
				<div>{this.state.data.date}</div>
				<span>
					<button onClick={this.edit}>EDIT</button>
					<button onClick={this.remove}>X</button>
				</span>
			</li>
		)
	}
}

export default Event;
