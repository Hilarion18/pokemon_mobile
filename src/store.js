import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './reducer.js'; //Import the reducer
import {reducer} from './models/root-reducer';
import { pokemonListSaga } from './models/pokemon_list/sagas.js';
import {handler as userSaga} from './models/user/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export {store};
// Connect our store to the reducers
// export default createStore(reducers, applyMiddleware(thunk));