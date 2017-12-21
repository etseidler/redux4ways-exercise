import React from 'react';

import { connect } from 'react-redux';
import { fetchData } from './actions';

const App = (props) => (
  <div>
    <p>Redux Examples</p>
      <p>Load Data</p>
  </div>
);

function mapStateToProps (state) {
  return {
    appData: state.appData
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);