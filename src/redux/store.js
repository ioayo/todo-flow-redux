import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line
import todoReducer from './reducers';
import rootSaga from './sagas';

export const reducers = combineReducers({
  todos: todoReducer,
});

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
