import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './Home'

import configureStore, { history } from './configureStore'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Home history={history} />
    </Provider>,
  document.getElementById('root')
)

