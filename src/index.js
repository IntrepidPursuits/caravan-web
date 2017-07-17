import './stylesheets/index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
