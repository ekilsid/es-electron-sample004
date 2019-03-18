import React from 'react';

export default class ScreenSetting extends React.Component {
  render() {
    console.log('[ScreenSetting] render');
    console.log(window.location.pathname);

    return (
      <div className="contents-container">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-mini pane-menu">
              <nav className="nav-group">
                <h5 className="nav-group-title">Setting menu</h5>
                <a className="nav-group-item active">Setting Menu1</a>
                <a className="nav-group-item">Setting Menu2</a>
                <a className="nav-group-item">Setting Menu3</a>
              </nav>
            </div>
            <div className="pane pane-content">
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" rows="3" />
                </div>
                <select className="form-control">
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                  <option>Option five</option>
                  <option>Option six</option>
                  <option>Option seven</option>
                  <option>Option eight</option>
                </select>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> This is a checkbox
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> This is a checkbox too
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="radios" />
                    Be sure to remember to check for unknown unknowns
                  </label>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-form btn-default">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-form btn-primary">
                    OK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
