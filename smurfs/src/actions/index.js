/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDING = 'ADDING';
export const FETCHING = 'FETCHING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const url = 'http://localhost:3333/smurfs';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING});
  Axios.get(url)
  .then(response => {
    dispatch({
      type: SUCCESS,
      payload: response.data,
    });
  })
  .catch(err => {
    dispatch({
      type: FAILURE,
      payload: {error: err.message},
    });
  })
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({type: ADDING});
  Axios.post(url, newSmurf)
  .then(response => {
    dispatch({
      type: SUCCESS,
      payload: response.data,
    });
  })
  .catch(err => {
    dispatch({
      type: FAILURE,
      payload: {error: err.message},
    });
  });
}
