import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLoggedInUser, clearLoggedInUser } from '../actions/actionCreators';
import '../css/App.css';
// import Spinner from './Spinner'
import Adventures from './Adventures'
import AdventureForm from './AdventureForm'
import AdventureEditForm from './AdventureEditForm'
import { Route, NavLink, withRouter } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

class App extends Component {

  onLogout = () => {
    localStorage.clear(); // takes away everything in localstorage
    this.props.clearLoggedInUser();
    this.props.history.replace('/'); // props from react router (need to use HOC withRouter)
  };

  render() {

    return (
      <div>
        <nav>
          <span>
            <NavLink to='/'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/adventures'>Adventures</NavLink>
          </span>

          <button onClick={this.onLogout}>Logout</button>

        </nav>

        <div>
          <Route
            path='/'
            exact
            render={(props) => <Login {...props} setLoggedInUser={this.props.setLoggedInUser}/>}
          />
          <Route
            path='/register'
            exact
            render={(props) => <Register {...props} setLoggedInUser={this.props.setLoggedInUser}/>}
          />
        </div>

        <div className="listAndForms">
          <div style={this.props.adventureBeingEditedId ? { pointerEvents: "none", filter: "blur(3px)" } : {}}>
            <Route
              path='/adventures'
              exact
              component={Adventures}
            />
            <Route
              path='/adventures'
              exact
              component={AdventureForm}
            />
          </div>
          {this.props.adventureBeingEditedId && <AdventureEditForm />}
        </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setLoggedInUser,
    clearLoggedInUser,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
