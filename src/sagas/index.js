import { all } from 'redux-saga/effects';
import todoSaga from './todoSagas';

export default function* root(): any {
  yield all([
    todoSaga()(),
  ]);
}
