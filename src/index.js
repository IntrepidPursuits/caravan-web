import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { caravanApp } from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './stylesheets/index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(caravanApp)

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage}></IndexRoute>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
