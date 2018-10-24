// @flow

import { connect } from 'react-redux';
import type { State, Dispatch } from '../types';
import TodoList from '../components/TodoList';
import { toggleTodo, viewTodo } from '../actions/todo';

const mapStateToProps = (state: State) => ({
  todos: state.todoState.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTodoClick: (id) => {
    dispatch(viewTodo(id));
  },
  onCheckTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
