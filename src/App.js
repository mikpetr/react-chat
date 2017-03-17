import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to my React chat</h2>
          </div>
          <p className="App-intro">
            This is a simple chat, that you can use for everyday :).
          </p>
          <p>
            To get started, type your name.
          </p>
          <p className="inputs-group">
            <TextField hintText="Type your name" />
            <RaisedButton className="join-button" label="Join" />
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
