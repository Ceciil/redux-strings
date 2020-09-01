/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_STRINGS } from '../constants';
import { stringUpdated, stringUpdatingError } from '../actions';
import stringViewerSaga, { getStrings } from '../saga';

describe('stringViewerSaga Saga', () => {
  let getFetchStrings;

  beforeEach(() => {
    getFetchStrings = getStrings();

    const selectDescriptor = getFetchStrings.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getFetchStrings.next('Hello World').value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('Should dispatch the stringUpdated action if it requests the data successfully', () => {
    const response = ['Hello World'];
    const putDescriptor = getFetchStrings.next(response).value;
    expect(putDescriptor).toEqual(put(stringUpdated(response, 'Hello World')));
  });

  it('Should call the stringUpdatingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStrings.throw(response).value;
    expect(putDescriptor).toEqual(put(stringUpdatingError(response)));
  });

  it('Should start task to watch for FETCH_STRINGS action', () => {
    const takeLatestDescriptor = stringViewerSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(FETCH_STRINGS, getFetchStrings),
    );
  });
});
