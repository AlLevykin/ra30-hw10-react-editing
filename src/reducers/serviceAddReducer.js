import { CHANGE_SERVICE_FIELD, EDIT_SERVICE } from '../actions/actionTypes';

const initialState = {
  id: "",
  name: '',
  price: 0.0
};

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      return {...action.payload};
    default:
      return state;
  }
};

export default serviceAddReducer;
