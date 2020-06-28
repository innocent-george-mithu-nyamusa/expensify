import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Own modules
import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter';

//Styler Modules
import 'normalize.css/normalize.css';
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
