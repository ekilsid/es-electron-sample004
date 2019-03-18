import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import headerReducer from '../modules/Header';

const rootReducer = history =>
  combineReducers({
    header: headerReducer,
    router: connectRouter(history)
  });

export default rootReducer;
