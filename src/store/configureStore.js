import { createStore, combineReducers } from 'redux';

import locaisReducer from './reducers/locaisReducer';

const rootReducer = combineReducers({
  locais: locaisReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
