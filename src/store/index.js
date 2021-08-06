import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceReducer from '../reducers/serviceReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceReducer
});

const store = createStore(reducer);

export default store;
