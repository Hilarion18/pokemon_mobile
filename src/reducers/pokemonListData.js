import { DATA_AVAILABLE } from "../action" //Import the actions types constant we defined in our actions

let dataState = { data: [] };

export const pokemonListReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return {...state, data: action.data};
        default:
            return state;
    }
};