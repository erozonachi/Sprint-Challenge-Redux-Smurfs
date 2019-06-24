import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, } from 'react-router-dom';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
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
      <Router>
        <AppContainer>
          <nav>
            <NavLink to='/'>Smurfs</NavLink>
            <NavLink to='/smurf-form/ '>Add Smurf</NavLink>
          </nav>
          <Route 
            exact
            path='/' 
            render={props => <Smurfs {...props} />}
          />
          <Route 
            path='/smurf-form/:id' 
            render={props => <SmurfForm 
              {...props} />}
          />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
