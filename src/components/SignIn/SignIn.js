import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './SignIn.css';
import logo from '../../logo.svg';

class SignIn extends Component {
  render () {
    return (
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
        <div className="inputs-group">
          <TextField hintText="Type your name" />
          <Link to="/home">
            <RaisedButton className="join-button" label="Join" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;