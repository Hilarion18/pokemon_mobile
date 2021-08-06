import { combineReducers } from 'redux';
// import {dummyReducer} from './reducers/dummyData'
import { pokemonListReducer } from './models/pokemon_list/reducers';
import {reducer as userReducer} from './models/user/reducers';

// Combine all the reducers
const rootReducer = combineReducers({
  user: userReducer,
  // dummyReducer,
  // pokemonListReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;