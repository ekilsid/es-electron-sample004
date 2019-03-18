import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import headerReducer from '../modules/Header';

export const history = createBrowserHistory();

const initialState = {
  task: '',
  tasks: []
};

// const rootReducer = combineReducers({
//   header: headerReducer
// });

const store = createStore(
  //connectRouter(history)(rootReducer), // new root reducer with router state
  connectRouter(history), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  )
);

export default store;
