/*
  Be sure to import in all of the action types from `../actions`
*/
import * as types from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADDING:
      return {
        ...initialState,
        smurfs: [...state.smurfs],
        addingSmurf: true,
      };
    case types.DELETING:
      return {
        ...initialState,
        smurfs: [...state.smurfs],
        deletingSmurf: true,
      };
    case types.FETCHING:
      return {
        ...initialState,
        smurfs: [...state.smurfs],
        fetchingSmurfs: true,
      };
    case types.UPDATING:
      return {
        ...initialState,
        smurfs: [...state.smurfs],
        updatingSmurf: true,
      };
    case types.FAILURE:
      return {
        ...initialState,
        smurfs: [...state.smurfs],
        error: action.payload.error,
      };
    case types.SUCCESS:
      return {
        ...initialState,
        smurfs: action.payload,
      };
    default:
      return state;
  }
}
