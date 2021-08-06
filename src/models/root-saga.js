import { userSaga } from "./user/sagas";
import { pokemonListSaga } from "./pokemon_list/sagas";
import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([
    fork(pokemonListSaga),
    fork(userSaga),
    // updateProfileSaga,
    // listenActionWatcher
  ])
}

export default rootSaga;