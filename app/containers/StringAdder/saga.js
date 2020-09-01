import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

// Individual exports for testing
export function* addString(action) {
  const requestURL = `http://localhost:3000/strings`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string: action.string }),
  };

  try {
    yield put({ type: 'ADD_STRING_REQUEST' });
    yield call(request, requestURL, options);
    yield put({ type: 'ADD_STRING_SUCCESS' });
  } catch (error) {
    yield put({ type: 'ADD_STRING_FAILURE' });
  }
}

export default function* stringAdderSaga() {
  // Then I want to update redux with my new strings
  yield takeLatest('ADD_STRING', addString);
}
