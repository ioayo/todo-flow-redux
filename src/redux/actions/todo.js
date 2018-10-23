import * as types from '../constants/todo';

export const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: types.REMOVE_TODO,
  payload: id,
});
