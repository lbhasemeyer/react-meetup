import React, { Component } from 'react';
import SlackLogo from '../assets/slackLogo.svg';
import { connect } from 'react-firebase';

class Slack extends Component {
	constructor(props) {
    super(props);
    this._validateEmail = this._validateEmail.bind(this);
    this._validateName = this._validateName.bind(this);
    this._changeEmail = this._changeEmail.bind(this);
    this._changeFirstLastName = this._changeFirstLastName.bind(this);
    this._signupClicked = this._signupClicked.bind(this);
    this._resetButtonText = this._resetButtonText.bind(this);
    this.state = {email: null, firstLastName: null, emailValid: false, nameValid: false, buttonText: 'Request Invite'};
  }
	_validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  _validateName(name) {
		if(name && name.length > 0){
	    return true;
		} else {
			return false;
		}
  }
  _changeEmail(event) {
  	this.setState({email: event.target.value});
  	if(this._validateEmail(event.target.value) === true){
	  	this.setState({emailValid: true});
  	} else {
  		this.setState({emailValid: false});
  	}
  }
  _changeFirstLastName(event) {
  	this.setState({firstLastName: event.target.value});
  	if(this._validateName(event.target.value) === true){
	  	this.setState({nameValid: true});
  	} else {
  		this.setState({nameValid: false});
  	}
  }
   _signupClicked() {
   	if(this.state.emailValid && this.state.nameValid) {
	   	//This is where the name and email are saved from
		  // this.props.addItem(this.state.firstLastName, this.state.email);
	  	this.setState({buttonText: "Thanks! Please check your email to accept your Slack invite."});
      //reset state
	  	this.setState({firstLastName: null});
	  	this.setState({email: null});
	  	this.setState({emailValid: false});
	  	this.setState({nameValid: false});
	  	//clear inputs
	  	document.getElementById("emailInput").value = "";
	  	document.getElementById("nameInput").value = "";
   	}
  }
  _resetButtonText() {
  	if(this.state.buttonText !== "Request Invite"){
	  	this.setState({buttonText: "Request Invite"});
	  }
  }
  render() {
  	let buttonDisabled = (!this.state.emailValid || !this.state.nameValid)
    let emailHasBorder = this.state.emailValid === false;
    let nameHasBorder = this.state.nameValid === false;
		let inputs = (this.state.buttonText === 'Thanks! Please check your email to accept your Slack invite.') ?
			(<div className="signup__inputs-and-button">
				<div className="signup__div-success">{this.state.buttonText}</div>
			</div>):
			(<div className="signup__inputs-and-button">
				<input type="email" id="emailInput" name="email" placeholder="Email" style={{border: emailHasBorder ? '2px solid #8a83c2' : null}} onClick={this._resetButtonText} onChange={this._changeEmail} />
				<input type="text" id="nameInput" name="firstlastname" placeholder="First and Last Name" style={{border: nameHasBorder ? '2px solid #8a83c2' : null}} onClick={this._resetButtonText} onChange={this._changeFirstLastName} />
				<button onClick={this._signupClicked} style={{backgroundColor: buttonDisabled ? 'lightGray' : '#8789C0'}}>{this.state.buttonText}</button>
			</div>);
    return (
    	<div className="signup">
  			<div className="signup__text">
  				<span>{this.state.emailValid}Join our </span>
  				<span><img src={SlackLogo} alt='' style={{marginBottom: -8}}/></span>
  				<span> channel</span>
  			</div>
  			{inputs}
  		</div>
    );
  }
}

const MapPropsToFirebase = (props, ref) => ({
	addItem: (name, email) => ref('item').push({
		timeStamp: Date.now(),
		name: name,
		email: email,
		sent: false
	})
})

export default connect(MapPropsToFirebase)(Slack);
