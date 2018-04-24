import React, { Component } from 'react';
import SlackLogo from '../slackLogo.svg';

class Slack extends Component {
	constructor(props) {
    super(props);
    this._changeEmail = this._changeEmail.bind(this);
    this._changeFirstLastName = this._changeFirstLastName.bind(this);
    this._signupClicked = this._signupClicked.bind(this);
    this._resetButtonText = this._resetButtonText.bind(this);
    this.state = {email: null, firstLastName: null, buttonText: 'Request Invite'};
  }
  _changeEmail(event) {
  	this.setState({email: event.target.value});
  }
  _changeFirstLastName(event) {
  	this.setState({firstLastName: event.target.value});
  }
   _signupClicked() {
   	//THIS IS WHERE THE EMAIL AND NAME COME
  	console.log(this.state);
  	this.setState({buttonText: "Thanks! Please allow 24 hours for invite"});
  }
  _resetButtonText() {
  	if(this.state.buttonText !== "Request Invite"){
	  	this.setState({buttonText: "Request Invite"});
	  }
  }
  render() {
    return (
    	<div className="App-signup">
			<div className="App-signup-text">
				<div style={{display: 'inline-block'}}>Join our</div>
				<img src={SlackLogo} alt='' height='80px' style={{position: 'relative', top: '50%', transform: 'translateY(37%)'}} />
				<div style={{display: 'inline-block'}}>channel</div>
			</div>
			<div className="App-signup-inputs-and-button">
				<input type="text" name="email" placeholder="Email" onClick={this._resetButtonText} onChange={this._changeEmail} />
				<input type="text" name="firstlastname" placeholder="First and Last Name" onClick={this._resetButtonText} onChange={this._changeFirstLastName} />
				<button onClick={this._signupClicked}>{this.state.buttonText}</button>
			</div>
		</div>
    );
  }
}

export default Slack;