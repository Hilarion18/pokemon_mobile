import {call, put, select} from 'redux-saga/effects';
import { POKEMON_API, API_URL } from '../utils/config/api';

function* queryPokemonAPI({endpoint, method, body = null}) {
  const state = yield select();
  const res = yield call(pokemonRequest, {
    endpoint,
    method,
    headers: {
      Authorization: state.user.accessToken
        ? `Bearer ${state.user.accessToken}`
        : null,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
    }),
  });

  // const data = yield call([res, res.json])
  // return data.results ? data.results : data;

  if (res.status === 401) {
    // Log the user out
    // Explain that they need to log back in
  }

  const parsedResponse = yield call(parseResponse, res);
  if (!res.ok) {
    // Handle bad response here
  }
  return parsedResponse.results ? parsedResponse.results : parsedResponse;
}

const pokemonRequest = async ({endpoint, method, headers, body = null}) => {
  return fetch(POKEMON_API + endpoint, {
    method,
    headers,
    body: body === '{}' ? undefined : body,
  });
};


function* queryApi({endpoint, method, body = null}) {
  const state = yield select();
  const res = yield call(makeRequest, {
    endpoint,
    method,
    headers: {
      Authorization: state.user.accessToken
        ? `Bearer ${state.user.accessToken}`
        : null,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
    }),
  });

  if (res.status === 401) {
    // Log the user out
    // Explain that they need to log back in
  }

  const parsedResponse = yield call(parseResponse, res);
  if (!res.ok) {
    // Handle bad response here
  }

  return parsedResponse;
}

const makeRequest = async ({endpoint, method, headers, body = null}) => {
  return fetch(API_URL + endpoint, {
    method,
    headers,
    body: body === '{}' ? undefined : body,
  });
};

const parseResponse = async response => {
  let parsedResponse;
  try {
    parsedResponse = await response.json();
    // console.log("== parsedResponse: ", parsedResponse)
  } catch (e){
    console.log("== catch", e)
    parsedResponse = await response.text();
  }

  return parsedResponse;
};


export {
  queryApi,
  queryPokemonAPI
};
