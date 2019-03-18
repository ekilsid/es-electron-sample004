import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

//import store from './reducers';
//import store, { history } from './reducers'

import Header from './components/Header';
import ScreenFunc1 from './components/ScreenFunc1';
import ScreenFunc2 from './components/ScreenFunc2';
import ScreenFunc3 from './components/ScreenFunc3';
import ScreenSetting from './components/ScreenSetting';

import App from './App'

import configureStore, { history } from './configureStore'
const store = configureStore();

console.log('renderer');
console.dir(store);
console.dir(history);


ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
  document.getElementById('root')
)

// ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
//           <div>
//           <Switch>
//             <Route exact path="/" render={() => (<div>Match</div>)} />
//             <Route render={() => (<div>Miss</div>)} />            
//           </Switch>
//           </div>
//       </ConnectedRouter>
//     </Provider>,
//     document.getElementById('root')
//   );
