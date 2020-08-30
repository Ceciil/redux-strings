import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

// Individual exports for testing
export function* getStrings() {
  const requestURL = `http://localhost:3000/strings`;

  try {
    yield put({ type: 'UPDATE_STRINGS_REQUEST' });
    const strings = yield call(request, requestURL);
    yield put({ type: 'UPDATE_STRINGS_SUCCESS', strings });
  } catch (error) {
    yield put({ type: 'UPDATE_STRINGS_FAILURE' });
  }
  // See example in containers/HomePage/saga.js
}

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
    const strings = yield call(request, requestURL, options);
    yield put({ type: 'ADD_STRING_SUCCESS', strings });
  } catch (error) {
    yield put({ type: 'ADD_STRING_FAILURE' });
  }
}

export default function* stringViewerSaga() {
  // I want to make a call to get strings
  yield takeLatest('GET_STRINGS', getStrings);

  // Then I want to update redux with my new strings
  yield takeLatest('ADD_STRING', addString);
}
