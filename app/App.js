import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { HashRouter, BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import ScreenFunc1 from './components/ScreenFunc1';
import ScreenFunc2 from './components/ScreenFunc2';
import ScreenFunc3 from './components/ScreenFunc3';
import ScreenSetting from './components/ScreenSetting';
import Side from './components/Side';

const App = ({ history }) => {

  console.log('[App] render');
  console.dir(history);
  console.log(window.location.pathname);

  return (
    <ConnectedRouter history={history}>
      <HashRouter>
      <div className="layout container">
        <Side history={history} />
        <Switch>
          <Route path="/func2" component={ScreenFunc2} />
          <Route path="/func3" component={ScreenFunc3} />
          <Route path="/funcS" component={ScreenSetting} />
          <Route path="*" component={ScreenFunc1} />
        </Switch>
      </div>
      </HashRouter>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
