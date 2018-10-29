import shortid from 'shortid';
import type {
  Id, Todo, TodosAction, Filter,
} from '../types/todos';

export const addTodo = (todo: Todo): TodosAction => ({
  type: 'ADD_TODO',
  id: shortid.generate(),
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

export const showEditModal = (): TodosAction => ({
  type: 'SHOW_EDIT_MODAL',
});

export const closeEditModal = (): TodosAction => ({
  type: 'CLOSE_EDIT_MODAL',
});

export const saveTodo = (todo: Todo): TodosAction => ({
  type: 'SAVE_TODO',
  todo,
});

export const resetOpenedTodo = (): TodosAction => ({
  type: 'RESET_OPENED_TODO',
});

export const showCreateModal = (): TodosAction => ({
  type: 'SHOW_CREATE_MODAL',
});

export const closeCreateModal = (): TodosAction => ({
  type: 'CLOSE_CREATE_MODAL',
});

export const changeFilter = (filter: Filter): TodosAction => ({
  type: 'CHANGE_FILTER',
  filter,
});
