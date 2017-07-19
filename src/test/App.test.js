import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import store from '../store';

it('connects without crashing', () => {
  const div = document.createElement('div');
  connect(<App />, div);
});
