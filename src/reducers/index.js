import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import googleButton from './googleButton';

const rootReducer = combineReducers({
  googleButton,
  routing: routerReducer,
})

export default rootReducer;
