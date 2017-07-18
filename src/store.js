import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

let googleButtonClick = {clicked: false};

const defaultState = {
  googleButtonClick
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, defaultState, enhancer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
