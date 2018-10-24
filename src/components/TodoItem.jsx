// @flow

import React, { Component } from 'react';
import type { Todo, Id } from '../types/todos';

export type Props = {
  onClick: (id: Id) => void,
  onCheckTodoClick: (id: Id) => void,
  todo: Todo
};

class TodoItem extends Component<Props> {
  checkTodo = () => {
    const { onCheckTodoClick, todo } = this.props;
    onCheckTodoClick(todo.id);
  }

  viewTodo = () => {
    const { onClick, todo } = this.props;
    onClick(todo.id);
  }

  render() {
    const { todo } = this.props;
    const { checkTodo, viewTodo } = this;
    return (
      <li
        role="menuitem"
        className="list-group-item list-group-item-action"
        onClick={viewTodo}
        onKeyPress={viewTodo}
      >
        <input
          type="checkbox"
          onClick={checkTodo}
          defaultChecked={todo.completed}
        />
        {todo.title}
      </li>
    );
  }
}


export default TodoItem;
