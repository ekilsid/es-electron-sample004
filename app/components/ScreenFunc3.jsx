import React from 'react';

import Side from './Side';

export default class ScreenFunc3 extends React.Component {
  render() {
    console.log('[ScreenFunc3] render');
    console.log(window.location.pathname);

    return (
      <div className="contents container">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-mini sidebar pane-side">{/* <Side /> */}</div>
            <div className="pane-mini pane-menu">
              <nav className="nav-group">
                <h5 className="nav-group-title">Func3 menu</h5>
                <a className="nav-group-item active">Function3-1</a>
                <a className="nav-group-item">Function3-2</a>
                <a className="nav-group-item">Function3-3</a>
              </nav>
            </div>
            <div className="pane">333</div>
          </div>
        </div>
      </div>
    );
  }
}
