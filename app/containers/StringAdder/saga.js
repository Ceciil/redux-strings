import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { addString, stringAdded, stringAddingError } from './actions';
import { POST_STRING } from './constants';

// Individual exports for testing
export function* postString(action) {
  const requestURL = `http://localhost:3000/strings`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string: action.string }),
  };

  try {
    yield put(addString());
    yield call(request, requestURL, options);
    yield put(stringAdded());
  } catch (error) {
    yield put(stringAddingError());
  }
}

export default function* stringAdderSaga() {
  // Then I want to update redux with my new strings
  yield takeLatest(POST_STRING, postString);
}
