/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, compose } from 'redux';

import exemploReducer from './reducers/exemplo';

const rootReducer = combineReducers({
  exemploReducer
});

// # composeEnhancers com window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// # é o que permite o debug do app com RN Debugger.
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(rootReducer, composeEnhancers());

export default configureStore;
