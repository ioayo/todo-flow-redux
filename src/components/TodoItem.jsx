import React, { Component } from 'react';
import type { Todo, Id } from '../types/todos';

export type Props = {
  onChangeClick: (id: Id) => void,
  onCheckTodoClick: (id: Id) => void,
  onRemoveClick: (id: Id) => void,
  todo: Todo
};

class TodoItem extends Component<Props> {
  checkTodo = () => {
    const { onCheckTodoClick, todo } = this.props;
    onCheckTodoClick(todo.id);
  }

  changeTodo = () => {
    const { onChangeClick, todo } = this.props;
    onChangeClick(todo.id);
  }

  removeTodo = () => {
    const { onRemoveClick, todo } = this.props;
    onRemoveClick(todo.id);
  }

  render() {
    const { todo } = this.props;
    const { checkTodo, changeTodo, removeTodo } = this;
    return (
      <li className="list-group-item list-group-item-action">
        <div className="todo_item">
          <input
            type="checkbox"
            onClick={checkTodo}
            defaultChecked={todo.completed}
          />
          <span className="todo_item__title">{todo.title}</span>
          <button
            type="button"
            className="todo_item__change"
            onClick={changeTodo}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="todo_item__delete"
            onClick={removeTodo}
          >
            Удалить
          </button>
        </div>
      </li>
    );
  }
}


export default TodoItem;
