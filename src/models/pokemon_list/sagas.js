import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_ALL_POKEMON_LIST,
  GET_ALL_POKEMON_LIST_SUCCESS,
} from './actions';

function* pokemonListSaga() {
  yield takeEvery(GET_ALL_POKEMON_LIST, getAllPokemonList);
}

function* getAllPokemonList(action) {
  try {
    // API call
    // yield put({
    //   type: GET_ALL_POKEMON_LIST_SUCCESS,
    //   payload: {
    //     name: action.name,
    //     url: action.url,
    //   },
    // });
    // const data = yield call(fetchData);
    // yield put(GET_ALL_POKEMON_LIST, getAllPokemonList)
  } catch (err) {
    // Handle error
  }
}

export {pokemonListSaga};
