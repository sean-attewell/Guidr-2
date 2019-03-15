import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { adventuresReducer, spinner, adventureBeingEditedReducer } from './reducers/reducers';

const rootReducer = combineReducers({
    adventuresReducer,
    spinner,
    adventureBeingEditedReducer
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
        <App />
    </Provider>,
    document.getElementById('root')
);
