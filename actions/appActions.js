import * as types from '../constants/ActionTypes.js';

const API = 'http://localhost:3000/api';

export function loadData() {
  return (dispatch) => {
    dispatch({
      type: types.DATA,
      data: {}
    });

    return fetch(`${API}/data`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: types.DATA_SUCCESS,
          data: json.data
        });
      });

  };
}
