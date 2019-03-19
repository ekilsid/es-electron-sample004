import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, history } = this.props;

    console.log('[Side] render');
    console.dir(this.props);

    const isSide =
      header.side === 'func2' ||
      header.side === 'func3' ||
      header.side === 'funcS';

    return (
      <div className="side-container">
        <div
          className={`side-item ${!isSide && 'active'}`}
          onClick={() => history.replace('/func1')}
        >
          <span className="icon icon-home icon-side" />
        </div>

        <div
          className={`side-item ${header.side === 'func2' && 'active'}`}
          onClick={() => history.replace('/func2')}
        >
          <span className="icon icon-folder icon-side" />
        </div>

        <div
          className={`side-item ${header.side === 'func3' && 'active'}`}
          onClick={() => history.replace('/func3')}
        >
          <span className="icon icon-cloud icon-side" />
        </div>

        <div
          className={`side-item ${header.side === 'funcS' && 'active'}`}
          onClick={() => history.push('/funcS')}
        >
          <span className="icon icon-cog icon-side" />
        </div>
      </div>
    );
  }
}

Side.propTypes = {
  header: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log('[Side] mapStateToProps');
  console.dir(state);
  return {
    header: state.header
  };
};

export default withRouter(connect(mapStateToProps)(Side));
