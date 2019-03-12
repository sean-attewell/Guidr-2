import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Adventures from './Adventures'
import AdventureForm from './AdventureForm'


class App extends Component {

  render() {
    if (this.props.spinner) {
      <div>Getting adventures in progress...</div>;
    }
    return (
      <div className="listAndForm">
        <Adventures />
        {/* <AdventureForm /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // adventures: state.adventuresReducer, don't think this is used here
    spinner: state.spinner
  };
}

export default connect(mapStateToProps)(App);



