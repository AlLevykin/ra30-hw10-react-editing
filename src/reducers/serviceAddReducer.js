import {CHANGE_SERVICE_FIELD} from "./actionTypes";

const initialState = {
  fieldName: "",
  price: 0.0
}

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {fieldName, value} = action.payload;
      return {...state, [fieldName]: value};
    default:
      return state;
  }
}

export default serviceAddReducer;