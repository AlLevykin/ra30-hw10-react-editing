import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE
} from '../actions/actionTypes';

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
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name: name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    case EDIT_SERVICE:
      const { id, name, price } = action.payload;
      return state;
    default:
      return state;
  }
};

export default serviceListReduser;
