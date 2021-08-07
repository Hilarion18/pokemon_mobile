import { all, fork } from "redux-saga/effects";
import { userSaga } from "./user/sagas";
import { pokemonListSaga } from "./pokemon_list/sagas";
import { itemListSaga } from "./item_list/sagas";

function* rootSaga() {
  yield all([
    fork(pokemonListSaga),
    fork(userSaga),
    fork(itemListSaga),
  ])
}

export default rootSaga;