// @flow

import React from 'react';
import TodoItem from './TodoItem';
import type { Todos, Id } from '../types/todos';

export type Props = {
  todos: Todos,
  onTodoClick: (id: Id) => void,
  onCheckTodoClick: (id: Id) => void,
};

const TodoList = ({ todos, onTodoClick, onCheckTodoClick }: Props) => (
  <ul className="list-group">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onClick={onTodoClick}
        onCheckTodoClick={onCheckTodoClick}
      />
    ))}
  </ul>
);
export default TodoList;
