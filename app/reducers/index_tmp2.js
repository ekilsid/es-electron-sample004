import { createBrowserHistory } from 'history';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const reducer = () =>
  combineReducers({
    router: connectRouter(history)
  });

const store = createStore(
  reducer(history), // root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history actions
    )
  )
);

export default store;
