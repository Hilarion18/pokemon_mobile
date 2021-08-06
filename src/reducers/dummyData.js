import { DUMMY_DATA } from "../action" //Import the actions types constant we defined in our actions

let dataState = { data: [] };

export const dummyReducer = (state = dataState, action) => {
    switch (action.type) {
        case DUMMY_DATA:
            return {...state, data: action.data};
        default:
            return state;
    }
};