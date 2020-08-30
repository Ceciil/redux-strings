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

export default function* stringViewerSaga() {
  yield takeLatest('GET_STRINGS', getStrings);
  // I want to make a call to get strings
  // Then I want to update redux with my new strings
}
