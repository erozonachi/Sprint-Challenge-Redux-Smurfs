import React, {  } from 'react';
import Smurf from './Smurf';
import SmurfList from './StyledComponents/SmurfList';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

function Smurfs(props) {
  return (
    <SmurfList>
      <h1>Smurf Village</h1>
      <ul>
        {props.app.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              delHandler={props.deleteSmurf}
            />
          );
        })}
      </ul>
    </SmurfList>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};

const mapStateToProps = state => ({app: state.appState});

export default connect(mapStateToProps, { deleteSmurf })(Smurfs);
