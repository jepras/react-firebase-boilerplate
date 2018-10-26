import React, { Component } from 'react';
import DataList from '../data/DataList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    // takes data & auth from props
    const { data, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DataList data={data} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // take in data from state,firestore,ordered,projects
    data: state.firestore.ordered.data,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  // connects collection to to firestore to be used as state on site
  firestoreConnect([
    // which collection to connect to?
    { collection: 'data', orderedBy: ['createdAt', 'desc'] }
  ])
)(Dashboard);
