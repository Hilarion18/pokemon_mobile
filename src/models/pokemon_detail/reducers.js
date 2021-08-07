import {GET_POKEMONT_DETAIL_SUCCESS} from './actions';

const initialState = {
  pokemonDetail: {},
  pokemon: {},
  forms: []
};

const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONT_DETAIL_SUCCESS: {
      const pokemonDetail = action.payload;
      console.log("== pokemonDetailReducer: ", action.payload);
      return pokemonDetail;
    }
    default:
      return state;
  }
};

export {pokemonDetailReducer};
