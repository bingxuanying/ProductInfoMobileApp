import axios from 'axios';

axios.defaults.baseURL = 'http://13.57.57.242:3000';

export const fetchTrapLst = () => {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_DATA_INIT',
      payload: null,
    });

    axios
      .get('/api/fetchTrapIDs')
      .then(res => {
        dispatch({
          type: 'FETCH_TRAP_DATA_DONE',
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_TRAP_DATA_ERR',
          payload: err,
        });
      });

    dispatch({
      type: 'FETCH_DATA_DONE',
      payload: null,
    });
  };
};

export const updateCurTrap = id => {
  return {
    type: 'UPDATE_CURRENT_TRAP',
    payload: id,
  };
};