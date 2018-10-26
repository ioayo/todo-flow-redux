import { connect } from 'react-redux';
import type { State, Dispatch } from '../types';
import TodoList from '../components/TodoList';
import { toggleTodo, removeTodo, changeTodo } from '../actions/todo';

const mapStateToProps = (state: State) => ({
  todos: state.todoState.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeClick: (id) => {
    dispatch(changeTodo(id));
  },
  onCheckTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
  onRemoveClick: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
