import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import googleButtonClick from './googleButtonClick';

const rootReducer = combineReducers({
  googleButtonClick,
  routing: routerReducer
})

export default rootReducer;
