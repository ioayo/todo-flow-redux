// @flow

import type { Todos, Todo, Id } from '../types/todos';
import type { Action } from '../types';

const addTodo = (id: Id, todo: Todo): Todo => ({
  ...todo,
  id,
});

const toggleTodo = (todos: Todos, id: Id): Todos => (
  todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
);

const initialState = {
  todos: [
    {
      id: 1,
      priority: 'low',
      title: 'First Todo',
      description: 'Some description',
      completed: false,
    },
  ],
  openedTodo: null,
};

const todosReducer = (state: Todos = initialState, action: Action): Todos => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, addTodo(action.id, action.todo)],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: toggleTodo(state.todos, action.id),
      };
    case 'VIEW_TODO':
      return {
        ...state,
        openedTodo: action.id === state.openedTodo ? null : action.id,
      };
    default:
      return state;
  }
};

export default todosReducer;
