// @flow
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

export const viewTodo = (id: Id): TodosAction => ({
  type: 'VIEW_TODO',
  id,
});
