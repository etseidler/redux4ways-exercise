import React from 'react';

import { connect } from 'react-redux';
import { fetchData } from './actions';

const App = (props) => (
  <div className="container App">
      <div className="App-title">Redux Examples</div>
      <div
        onClick={() => props.fetchData()}
        className="load-data-button"
      >Load Data</div>
    <div>
      {
        props.appData.isFetching && <div>Loading...</div>
      }
      {
        props.appData.data.length ? (
          props.appData.data.map((person, i) => {
            return <div key={i}>
              <div>Name: {person.name}</div>
              <div>Age: {person.age}</div>
            </div>
          })
        ) : null
      }
    </div>
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