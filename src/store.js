import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import DevTools from './components/containers/DevTools.js';

let googleButtonClick = {clicked: false};

const defaultState = {
  googleButtonClick
}

// const enhancer = compose(
//   applyMiddleware(),
//   DevTools.instrument()
// );

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, defaultState, enhancer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
