import {takeEvery, put, call, takeLatest, all} from 'redux-saga/effects';
import {
  GET_ITEM_DETAIL,
  GET_ITEM_DETAIL_SUCCESS
} from './actions';
import { queryPokemonAPI } from '../query-api';

function* itemDetailSaga() {
  yield takeEvery(GET_ITEM_DETAIL, getItemDetail);
}

function* getItemDetail(action) {
  console.log("== action", action)
  try {
    // API call
    const posts = yield call(queryPokemonAPI, {
      endpoint: `item/${action.itemName}`,
      method: 'GET',
    });
    console.log("== posts:", posts)

    yield put({
      type: GET_ITEM_DETAIL_SUCCESS,
      payload: posts
    });
  } catch (err) {
    yield put({type: "GET_ITEM_DETAIL_FAILURE", message: err.message});
    // Handle error
  }
}
export {
  itemDetailSaga,
};
