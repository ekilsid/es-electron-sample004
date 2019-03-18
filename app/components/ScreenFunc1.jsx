import React from 'react';

import Side from './Side';

export default class ScreenFunc1 extends React.Component {
  render() {
    console.log('[ScreenFunc1] render');
    console.log(window.location.pathname);

    return (
      <div className="contents container">
        <header className="toolbar toolbar-header">
          <h1 className="title">Header with actions</h1>

          <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-home" />
              </button>
              <button className="btn btn-default">
                <span className="icon icon-folder" />
              </button>
            </div>

            <button className="btn btn-default">
              <span className="icon icon-home icon-text" />
              Filters
            </button>

            <button className="btn btn-default btn-dropdown pull-right">
              <span className="icon icon-megaphone" />
            </button>
          </div>
        </header>

        <div className="window-content">
          <div className="pane-group">
            <div className="pane-mini sidebar pane-side">{/* <Side /> */}</div>
            <div className="pane-mini pane-menu">
              <nav className="nav-group">
                <h5 className="nav-group-title">Func1 menu</h5>
                <a className="nav-group-item active">Function1-1</a>
                <a className="nav-group-item">Function1-2</a>
                <a className="nav-group-item">Function1-3</a>
              </nav>
            </div>
            <div className="pane">333</div>
          </div>
        </div>
      </div>
    );
  }
}
