import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as AppActions from '../actions/appActions.js';
import { fetchNeeds } from '../utils/fetchComponentData';

const needs = [
  AppActions.loadData
];

class Home extends React.Component {

  componentWillMount() {
    if (!this.props.state.app || !this.props.state.app.data) {
      fetchNeeds(needs, this.props);
    }
  }

  render() {
    const data = !this.props.state.app ? undefined : this.props.state.app.data;
    if (!data) {
      return <div>...loading...</div>;
    }

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

Home.needs = needs;

function mapStateToProps(state) {
  return { state }
  ;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
