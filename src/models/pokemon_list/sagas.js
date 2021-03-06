import {takeEvery, put, call, takeLatest, all} from 'redux-saga/effects';
import {
  GET_ALL_POKEMON_LIST,
  GET_ALL_POKEMON_LIST_SUCCESS,
} from './actions';
import { queryPokemonAPI } from '../query-api';

function* pokemonListSaga() {
  yield takeEvery(GET_ALL_POKEMON_LIST, getAllPokemonList);
}

function* getAllPokemonList(action) {
  try {
    // API call
    const posts = yield call(queryPokemonAPI, {
      endpoint: 'pokemon/',
      method: 'GET',
    });

    yield put({
      type: GET_ALL_POKEMON_LIST_SUCCESS,
      payload: posts
    });
  } catch (err) {
    yield put({type: "GET_ALL_POKEMON_LIST_FAILURE", message: err.message});
    // Handle error
  }
}
export {
  pokemonListSaga,
};
