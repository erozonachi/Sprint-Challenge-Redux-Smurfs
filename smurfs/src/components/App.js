import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, } from 'react-router-dom';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import Smurf from './Smurf';
import AppContainer from './StyledComponents/AppContainer';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
