import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';

import * as headerModule from '../modules/Header';

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleChangeSide(side) {
  //   console.log('[Side] handleChangeSide -> ' + side);
  //   this.props.history.replace('/' + side);
  //   //this.props.changeSide(side);
  //   //replace('/' + side);
  // }

  componentDidMount() {
    console.log('[Side] componentDidMount');
    console.dir(this.props);
    //this.props.history.replace('/' + this.props.header.side);
    this.props.history.push('/');
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
      <div className="side container">
        <div
          className={`side item ${!isSide && 'active'}`}
          onClick={() => history.replace('/func1')}
        >
          <span className="icon icon-home icon-side" />
        </div>

        <div
          className={`side item ${header.side === 'func2' && 'active'}`}
          onClick={() => history.replace('/func2')}
        >
          <span className="icon icon-folder icon-side" />
        </div>

        <div
          className={`side item ${header.side === 'func3' && 'active'}`}
          onClick={() => history.replace('/func3')}
        >
          <span className="icon icon-cloud icon-side" />
        </div>

        <div
          className={`side item ${header.side === 'funcS' && 'active'}`}
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

const mapDispatchToProps = dispatch => {
  return {
    changeSide: side => dispatch(headerModule.changeSide(side))
  };
};

const mapStateToProps = state => {
  console.log('[Side] mapStateToProps');
  console.dir(state);
  return {
    header: state.header
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Side)
);
//export default connect(mapStateToProps, mapDispatchToProps)(Side);
