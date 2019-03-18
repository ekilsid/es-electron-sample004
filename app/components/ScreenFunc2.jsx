import React from 'react';

import Side from './Side';

export default class ScreenFunc2 extends React.Component {
  render() {
    console.log('[ScreenFunc2] render');
    console.log(window.location.pathname);

    return (
      <div className="contents container">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-mini sidebar pane-side">{/* <Side /> */}</div>
            <div className="pane-mini pane-menu">
              <nav className="nav-group">
                <h5 className="nav-group-title">Func2 menu</h5>
                <a className="nav-group-item active">Function2-1</a>
                <a className="nav-group-item">Function2-2</a>
                <a className="nav-group-item">Function2-3</a>
              </nav>
            </div>
            <div className="pane">333</div>
          </div>
        </div>
      </div>
    );
  }
}
