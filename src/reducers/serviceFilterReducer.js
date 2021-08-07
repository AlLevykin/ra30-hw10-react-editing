import {FILTER_SERVICE_LIST} from '../actions/actionTypes';

const initialState = '';

const serviceFilterReduser = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SERVICE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default serviceFilterReduser;
