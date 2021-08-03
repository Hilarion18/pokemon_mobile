import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer.js'; //Import the reducer
  
// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk));