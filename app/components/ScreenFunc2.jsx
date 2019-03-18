import React from 'react';

export default class ScreenFunc2 extends React.Component {
  render() {
    console.log('[ScreenFunc2] render');
    console.log(window.location.pathname);

    return (
      <div className="contents-container">
        <header className="toolbar toolbar-header">
          <h1 className="title">Function2 actions</h1>

          <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-home" />
              </button>
              <button className="btn btn-default">
                <span className="icon icon-folder" />
              </button>
              <button className="btn btn-default active">
                <span className="icon icon-cloud" />
              </button>
              <button className="btn btn-default">
                <span className="icon icon-popup" />
              </button>
              <button className="btn btn-default">
                <span className="icon icon-shuffle" />
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
                <h5 className="nav-group-title">Func2 menu</h5>
                <a className="nav-group-item active">Function2-1</a>
                <a className="nav-group-item">Function2-2</a>
                <a className="nav-group-item">Function2-3</a>
              </nav>
            </div>
            <div className="pane pane-content">This is function2 contents</div>
          </div>
        </div>
      </div>
    );
  }
}
