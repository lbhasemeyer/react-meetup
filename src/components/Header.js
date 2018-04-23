import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
	    <header className="App-header">
			<h1 className="App-header-title">
				<span>Welcome to</span>
				<span> React Colorado</span>
			</h1>
			<p className="App-header-tagline">Connecting and Supporting the React Community</p>
	    </header>
    );
  }
}

export default Header;
