import React, { Component } from 'react';
import SlackLogo from '../slackLogo.svg';

class Slack extends Component {
  render() {
    return (
    	<div className="App-signup">
			<div className="App-signup-text">
				<div style={{height:50, display: 'inline-block'}}>Join our</div>
				<img src={SlackLogo} alt='' height='50px' style={{position: 'relative', top: '50%', transform: 'translateY(37%)'}} />
				<div style={{height:50, display: 'inline-block'}}>channel</div>
			</div>
			<div className="App-signup-24-hours">
				Please allow up to 24 hours for Slack invite
			</div>
		</div>
    );
  }
}

export default Slack;