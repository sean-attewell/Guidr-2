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
        {this.props.adventureBeingEditedId && <AdventureEditForm />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    spinner: state.spinner,
    adventureBeingEditedId: state.adventureBeingEditedReducer
  };
}

export default connect(mapStateToProps)(App);



