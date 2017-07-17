import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import '../actions/actionCreator';

// in the future, the following reducer would exist in a different file & have more cases
const reducer = (state = [], action) => {
  switch (action.type) {
    // case
      // action: 'LOGIN_USER'
      // 
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
  // add any other reducers here
  routing: routerReducer
})

export default rootReducer;
