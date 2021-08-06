// const GET_ALL_POKEMON_LIST = 'user/GET_ALL_POKEMON_LIST';
// const GET_ALL_POKEMON_LIST_SUCCESS =
//   'user/GET_ALL_POKEMON_LIST_SUCCESS';
// const GET_ALL_POKEMON_LIST_FAILURE =
//   'user/GET_ALL_POKEMON_LIST_FAILURE';

// export {
//   GET_ALL_POKEMON_LIST,
//   GET_ALL_POKEMON_LIST_SUCCESS,
//   GET_ALL_POKEMON_LIST_FAILURE,
// };

import { ADD_POKEMON, GET_POKEMON_LIST, DELETE_POKEMON_LIST } from './types';

export const addPokemonList = (pokemon) => (
  {
    type: ADD_POKEMON,
    data: pokemon
  }
);

export const getPokemonList = (list) => (
  {
    type: GET_POKEMON_LIST,
    data: list
  }
);

export const deletePokemonList = (key) => (
  {
    type: DELETE_POKEMON_LIST,
    key: key
  }
);
