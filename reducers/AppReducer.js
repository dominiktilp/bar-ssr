import * as types from '../constants/ActionTypes';


const initialState = {

};

export default (state = initialState, action) => {
  console.log(action.type, state);
  switch (action.type) {

    case types.DATA:
      return {
        ...state,
        loading: true
      }

    case types.DATA_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        loading: false,
        data: action.data
      }

    default:
      return state;
  }
};
