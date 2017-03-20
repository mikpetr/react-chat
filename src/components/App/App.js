import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from '../SignIn/SignIn';
import Home from '../Home/Home';

import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Route exact path="/" component={SignIn}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/home" component={Home}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
