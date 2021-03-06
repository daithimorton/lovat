import React from 'react';
import axios from 'axios';
import Navbar from '../js/Navbar'
import Header from '../js/Header'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			webApiGatewayUrl: props.url
		};

		this.onSubmit = this.onSubmit.bind(this)
		this.onUsernameChange = this.onUsernameChange.bind(this)
		this.onPasswordChange = this.onPasswordChange.bind(this)
	}

	onSubmit(e){
		e.preventDefault();
		const authEndpointUrl = this.state.webApiGatewayUrl + '/auth';
		axios.post(authEndpointUrl, {
				username: this.state.username,
				password: this.state.password
			})
			.then(function(response){
				console.log(response)
			})
			.catch(function (error) {
			});

			// reset the values in the form
			this.setState({
				username: '',
				password: ''
			});
		}

		onUsernameChange(e){
			this.setState({username: e.target.value})
		}

		onPasswordChange(e){
			this.setState({password: e.target.value})
		}

		render() {
			return (
				<div>
					<Navbar/>
					<Header/>
					<div className='LoginForm'>
						<form onSubmit={this.onSubmit}>
							<input type='text' placeholder='Username' required='true' value={this.state.username} onChange={this.onUsernameChange} />
							<input type='password' placeholder='Password' required='true' value={this.state.password} onChange={this.onPasswordChange} />
							<div id="ButtonHolder">
								<button type='submit'>Sign In</button>
							</div>
						</form>
					</div>
				</div>
			)
		}
	}

	export default Login;
