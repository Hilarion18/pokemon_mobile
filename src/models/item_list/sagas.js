import {takeEvery, put, call, takeLatest, all} from 'redux-saga/effects';
import {
  GET_ALL_ITEM_LIST,
  GET_ALL_ITEM_LIST_SUCCESS,
} from './actions';
import { queryPokemonAPI } from '../query-api';

function* itemListSaga() {
  yield takeEvery(GET_ALL_ITEM_LIST, getAllItemList);
}

function* getAllItemList(action) {
  try {
    // API call
    const posts = yield call(queryPokemonAPI, {
      endpoint: 'item/',
      method: 'GET',
    });

    yield put({
      type: GET_ALL_ITEM_LIST_SUCCESS,
      payload: posts
    });
  } catch (err) {
    yield put({type: "GET_ALL_ITEM_LIST_FAILURE", message: err.message});
    // Handle error
  }
}
export {
  itemListSaga,
};
