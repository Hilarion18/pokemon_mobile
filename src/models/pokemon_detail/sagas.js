import {takeEvery, put, call, takeLatest, all} from 'redux-saga/effects';
import {
  GET_POKEMONT_DETAIL,
  GET_POKEMONT_DETAIL_SUCCESS
} from './actions';
import { queryPokemonAPI } from '../query-api';

function* pokemonDetailSaga() {
  yield takeEvery(GET_POKEMONT_DETAIL, getPokemonDetail);
}

function* getPokemonDetail(action) {
  try {
    // API call
    const posts = yield call(queryPokemonAPI, {
      endpoint: `pokemon/${action.pokemonName}`,
      method: 'GET',
    });
    console.log("== posts:", posts)

    yield put({
      type: GET_POKEMONT_DETAIL_SUCCESS,
      payload: posts
    });
  } catch (err) {
    yield put({type: "GET_POKEMONT_DETAIL_FAILURE", message: err.message});
    // Handle error
  }
}
export {
  pokemonDetailSaga,
};
