import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { adventuresReducer, spinner, adventureBeingEditedReducer, loggedInUserReducer } from './reducers/reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const rootReducer = combineReducers({
  adventuresReducer,
  spinner,
  adventureBeingEditedReducer,
  loggedInUserReducer
});


const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
