import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/reducers';
import { pokemonListReducer } from './pokemon_list/reducers';

const reducer = combineReducers({
  user: userReducer,
  pokemons: pokemonListReducer,
});

export {reducer};
