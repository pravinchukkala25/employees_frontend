import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import employeesSaga from './containers/employees/employeesSaga';
import employeesReducer from './containers/employees/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	employeesReducer,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(employeesSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
