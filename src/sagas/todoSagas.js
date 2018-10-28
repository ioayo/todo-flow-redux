import { put, takeEvery, all } from 'redux-saga/effects';
import type { TodosAction } from '../types/todos';
import {
  showEditModal, closeEditModal, resetOpenedTodo, closeCreateModal,
} from '../actions/todo';

export default () => {
  function* handleTodos(action: TodosAction) {
    switch (action.type) {
      case 'CHANGE_TODO': yield put(showEditModal());
        break;
      case 'SAVE_TODO': yield put(closeEditModal());
        break;
      case 'CLOSE_EDIT_MODAL': yield put(resetOpenedTodo());
        break;
      case 'ADD_TODO': yield put(closeCreateModal());
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
