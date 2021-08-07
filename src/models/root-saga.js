import { all, fork } from "redux-saga/effects";
import { userSaga } from "./user/sagas";
import { pokemonListSaga } from "./pokemon_list/sagas";
import { itemListSaga } from "./item_list/sagas";
import { pokemonDetailSaga } from "./pokemon_detail/sagas";

function* rootSaga() {
  yield all([
    fork(pokemonListSaga),
    fork(userSaga),
    fork(itemListSaga),
    fork(pokemonDetailSaga),
  ])
}

export default rootSaga;