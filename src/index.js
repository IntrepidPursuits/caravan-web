import './stylesheets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import App from './components/App';
import LandingPage from './components/LandingPage';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}></IndexRoute>
        <Route path='/login' component={LandingPage}></Route>
        <Route path='/login/google' component={LandingPage}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
