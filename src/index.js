import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { Router, browserHistory } from 'react-router';
import {getRoutes} from './routes';
import configureStore from './store/configureStore';
import './assets/css/bootstrap.css';
import './assets/css/cart.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes()}/>
  </Provider>, document.getElementById('app')
);
