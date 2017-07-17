import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import root reducer
import { caravanApp } from './reducers';
// import data

const defaultState = {
  // whatever the state holds (names of reducers can go here)
}

const store = createStore(CaravanApp, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
