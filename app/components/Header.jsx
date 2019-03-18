import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.header.tab
    };

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(tabName) {
    if (tabName !== this.state.activeTab) {
      this.setState({
        activeTab: tabName
      });
      this.props.history.push('/' + tabName);
    }
  }

  render() {
    return (
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

          <button className="btn btn-default btn-dropdown pull-right">
            <span className="icon icon-megaphone" />
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  header: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log('[Main#mapStateToProps]');
  console.dir(state);
  return {
    header: state.header
  };
};

export default withRouter(connect(mapStateToProps)(Header));
