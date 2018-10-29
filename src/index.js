
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// $FlowFixMe
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import configureStore from './store';
// ignore flow error on service worker
// $FlowFixMe
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass';

const { store, persistor } = configureStore();

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    /* eslint-disable */
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>, root,
    /* eslint-enable */
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
