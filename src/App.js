import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Slack from './components/Slack.js';
import Events from './components/Events.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slack />
        <Events />
      </div>
    );
  }
}

export default App;
