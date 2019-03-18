import React from 'react';

import Side from './Side';

export default class ScreenFunc3 extends React.Component {
  render() {
    console.log('[ScreenFunc3] render');
    console.log(window.location.pathname);

    return (
      <div className="contents container">
        <header className="toolbar toolbar-header">
          <h1 className="title">Function3 actions</h1>

          <div className="toolbar-actions">
            <button className="btn btn-default btn-dropdown pull-right">
              <span className="icon icon-megaphone" />
            </button>
          </div>
        </header>
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-mini pane-menu">
              <nav className="nav-group">
                <h5 className="nav-group-title">Func3 menu</h5>
                <a className="nav-group-item active">Function3-1</a>
                <a className="nav-group-item">Function3-2</a>
                <a className="nav-group-item">Function3-3</a>
              </nav>
            </div>
            <div className="pane pane-content">This is function3 contents</div>
          </div>
        </div>
      </div>
    );
  }
}
