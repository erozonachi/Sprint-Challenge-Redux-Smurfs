import React, { Component } from 'react';
import FormContainer from './StyledComponents/FormContainer';
import { connect } from 'react-redux';
import { addSmurf, editSmurf } from '../actions';

const initial = {
  name: '',
  age: '',
  height: '',
};

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id.trim();
    const smurf = this.id? this.getSmurf(this.id)[0] : initial;
    this.state = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
    };
  }

  getASmurf = (id) => {
    return props.app.smurfs.filter((smurf) => smurf.id === parseInt(id,10));
  }

  addSmurf = event => {
    event.preventDefault();
    if(this.state.name.trim() !== '' && 
      this.state.age.toString().trim() !== '' && 
      this.state.height.trim() !== '') {
      this.id? this.props.editSmurf({...this.state}, this.id) : this.props.addSmurf({...this.state});
    }

    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  }

  handleCancel = event => {
    event.preventDefault();
    this.id = null;
    this.props.history.push('/smurf-form/ ');
    this.setState({...initial});
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormContainer showCancel={this.id? true: false}>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.id? 'Edit Smurf' : 'Add to the village'}</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => ({app: state.appState});

export default connect(mapStateToProps, { addSmurf, editSmurf })(SmurfForm);
