// import {GET_ALL_POKEMON_LIST_SUCCESS} from './actions';
import { GET_POKEMON_LIST, ADD_POKEMON_LIST, DELETE_POKEMON_LIST } from "./types";

const initialState = {
  pokemonList: []
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_POKEMON_LIST_SUCCESS: {
    //   const { data } = action.payload;
    //   return {
    //     data
    //   };
    // }
    case GET_POKEMON_LIST: {
      const pokemonList = action.payload;
      return {
        pokemonList: pokemonList
      };
    }
    case ADD_POKEMON_LIST:
      return {
        pokemonList: action.data
      };
    case DELETE_POKEMON_LIST:
      return {
        pokemonList: pokemonList
      };
    default:
      return state;
  }
};

export {pokemonListReducer};
