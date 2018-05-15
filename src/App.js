import React, { Component } from 'react';
import { Provider } from 'react-firebase';
import { initializeApp } from 'firebase';
import './App.css';
import Header from './components/Header.js';
import Slack from './components/Slack.js';
import Events from './components/Events.js';
import Footer from './components/Footer.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD__hNVD-b4rQf6E7h3OuILSA-8WlLNrBw",
  authDomain: "reactcolorado.firebaseapp.com",
  databaseURL: "https://reactcolorado.firebaseio.com",
  projectId: "reactcolorado",
  storageBucket: "reactcolorado.appspot.com",
  messagingSenderId: "1041594062405"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Provider firebaseApp={firebaseApp}>
          <Slack />
        </Provider>
        <Events />
        <Footer />
      </div>
    );
  }
}

export default App;
