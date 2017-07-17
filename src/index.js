import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './stylesheets/index.css';
import store from './store';
import App from './components/App';
import LandingPage from './components/LandingPage';
import registerServiceWorker from './registerServiceWorker';

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
