import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
// import Spinner from './Spinner'
import Adventures from './Adventures'
import AdventureForm from './AdventureForm'
import AdventureEditForm from './AdventureEditForm'

class App extends Component {

  render() {
    // if (this.props.spinner) {
    //   return (
    //     <div className="listAndForm">
    //     <Spinner />
    //   </div>
    //   )
    // }
    return (
      <div className="listAndForm">
        <Adventures />
        <AdventureForm />
        <AdventureEditForm />
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



