import React, { Component } from 'react';
import moment from 'moment';
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
    const { completedIn, completed, deadline } = todo;
    const { checkTodo, changeTodo, removeTodo } = this;
    let isExpired = false;
    if (deadline) {
      isExpired = moment().isAfter(deadline);
    }
    return (
      <li className={`list-group-item ${completed ? 'list-group-item-success' : ''} ${isExpired ? 'list-group-item-danger' : ''}`}>
        <div className="todo_item">
          <input
            type="checkbox"
            onClick={checkTodo}
            checked={todo.completed}
            readOnly
          />
          <span className="todo_item__title">{todo.title}</span>
          {completed && (
          <span className="todo_item__completedIn">
            Дата и время выполнения:
            {' '}
            {moment(completedIn).format('DD MMMM YYYY, HH:mm')}
          </span>
          )}
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
