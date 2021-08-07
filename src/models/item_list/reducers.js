import {GET_ALL_ITEM_LIST_SUCCESS} from './actions';
import { GET_ITEM_LIST, ADD_ITEM_LIST, DELETE_ITEM_LIST } from "./types";

const initialState = {
  itemList: [],
};

const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEM_LIST_SUCCESS: {
      const itemList = action.payload;
      return itemList;
    }
    default:
      return state;
  }
};

export {itemListReducer};
