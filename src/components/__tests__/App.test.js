import React from 'react';
import { connect } from 'react-redux';
import App from '../App/index';

it('connects without crashing', () => {
  const div = document.createElement('div');
  connect(<App />, div);
});
