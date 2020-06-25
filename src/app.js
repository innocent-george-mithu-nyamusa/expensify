import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Own modules
import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './selectors/expenses';
//Styler Modules
import 'normalize.css/normalize.css';
import './../style/style.scss';

const store = configureStore();

const jsx = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
