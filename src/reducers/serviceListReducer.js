import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE} from "./actionTypes";

const initialState = [
  {
    id: nanoid(),
    name: 'Замена стекла',
    price: 22.5
  },
  {
    id: nanoid(),
    name: 'Замена материнской платы',
    price: 159.99
  }
];

const serviceListReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default serviceListReduser;