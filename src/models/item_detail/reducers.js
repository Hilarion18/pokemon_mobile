import {GET_ITEM_DETAIL_SUCCESS} from './actions';

const initialState = {
  itemDetail: {},
  item: {},
};

const itemDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM_DETAIL_SUCCESS: {
      const itemDetail = action.payload;
      return itemDetail;
    }
    default:
      return state;
  }
};

export {itemDetailReducer};
