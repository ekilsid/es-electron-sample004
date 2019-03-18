import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterReducer from './counter';

import headerReducer from '../modules/Header';

const rootReducer = history =>
  combineReducers({
    header: headerReducer,
    router: connectRouter(history)
  });

export default rootReducer;
