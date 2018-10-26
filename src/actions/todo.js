import type { Id, Todo, TodosAction } from '../types/todos';

const nextId: Id = 0;

export const addTodo = (id: Id, todo: Todo): TodosAction => ({
  type: 'ADD_TODO',
  id: nextId + 1,
  todo,
});

export const removeTodo = (id: Id): TodosAction => ({
  type: 'REMOVE_TODO',
  id,
});

export const toggleTodo = (id: Id): TodosAction => ({
  type: 'TOGGLE_TODO',
  id,
});

export const changeTodo = (id: Id): TodosAction => ({
  type: 'CHANGE_TODO',
  id,
});

export const showModal = (): TodosAction => ({
  type: 'SHOW_TODO_MODAL',
});

export const closeModal = (): TodosAction => ({
  type: 'CLOSE_TODO_MODAL',
});

export const saveTodo = (todo: Todo): TodosAction => ({
  type: 'SAVE_TODO',
  todo,
});

export const resetOpenedTodo = (): TodosAction => ({
  type: 'RESET_OPENED_TODO',
});
