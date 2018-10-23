import * as types from '../constants/todo';

export default (state, action) => {
  switch (action.type) {
    case types.ADD_TODO: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
