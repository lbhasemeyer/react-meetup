import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
	    <header className="header">
  			<h1 className="header__title">
  				<span>Welcome to</span>
  				<span> React Colorado</span>
  			</h1>
  			<p className="header__tagline">Connecting and Supporting the React Community</p>
	    </header>
    );	
  }
}

export default Header;
