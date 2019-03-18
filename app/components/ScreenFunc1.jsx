import React from 'react';

import Side from './Side';

export default class ScreenFunc1 extends React.Component {
  render() {
    console.log('[ScreenFunc1] render');
    console.log(window.location.pathname);

    return (
      <div className="contents container">
        <header className="toolbar toolbar-header">
          <h1 className="title">Function1 actions</h1>

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
          </div>
        </header>

        <div className="window-content">
          <div className="pane-group">
            <div className="pane-mini pane-menu">
              <nav className="nav-group">
                <h5 className="nav-group-title">Func1 menu</h5>
                <a className="nav-group-item active">Function1-1</a>
                <a className="nav-group-item">Function1-2</a>
                <a className="nav-group-item">Function1-3</a>
              </nav>
            </div>
            <div className="pane pane-content">This is function1 contents</div>
          </div>
        </div>
      </div>
    );
  }
}
