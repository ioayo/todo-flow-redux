import { createSelector } from 'reselect';
import type { State } from '../types';
import type { Filter, Todos } from '../types/todos';

const todosSelector = (state: State) => state.todoState.todos;
const filterSelector = (state: State) => state.todoState.filter;

export default createSelector(
  todosSelector,
  filterSelector,
  (todos: Todos, filter: Filter) => {
    switch (filter) {
      case 'all':
        return todos;
      default:
        return todos.filter(t => t.priority === filter);
    }
  },
);
