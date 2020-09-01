import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_STRINGS } from './constants';
import { updateString, stringUpdated, stringUpdatingError } from './actions';

// Individual exports for testing
export function* getStrings() {
  const requestURL = `http://localhost:3000/strings`;

  try {
    yield put(updateString());
    const strings = yield call(request, requestURL);
    yield put(stringUpdated(strings));
  } catch (error) {
    yield put(stringUpdatingError());
  }
  // See example in containers/HomePage/saga.js
}

export default function* stringViewerSaga() {
  // I want to make a call to get strings
  yield takeLatest(FETCH_STRINGS, getStrings);
}
