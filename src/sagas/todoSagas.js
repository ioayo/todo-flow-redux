import { put, takeEvery, all } from 'redux-saga/effects';
import type { TodosAction } from '../types/todos';
import { showModal, closeModal, resetOpenedTodo } from '../actions/todo';

export default () => {
  function* handleTodos(action: TodosAction) {
    switch (action.type) {
      case 'CHANGE_TODO': yield put(showModal());
        break;
      case 'SAVE_TODO': yield put(closeModal());
        break;
      case 'CLOSE_TODO_MODAL': yield put(resetOpenedTodo());
        break;
      default:
        break;
    }
  }

  return function* watchTodosActions(): any {
    yield all([
      takeEvery(action => action, handleTodos),
    ]);
  };
};
