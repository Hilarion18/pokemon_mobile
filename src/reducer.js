import {combineReducers} from 'redux';
import {userReducer} from './models/user/reducers';
import { pokemonListReducer } from './models/pokemon_list/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  pokemons: pokemonListReducer,
});

export {rootReducer};
