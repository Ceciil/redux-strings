import produce from 'immer';
import stringViewerReducer from '../reducer';
import { updateString, stringUpdated, stringUpdatingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('stringViewerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      strings: ['small', 'cat'],
    };
  });

  it('Should return the initial state', () => {
    const expectedResult = state;
    expect(stringViewerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('Should handle the updateString action correctly', () => {
    const expectedResult = produce(state, newState => {
      newState.loading = true;
      newState.error = false;
    });

    expect(stringViewerReducer(state, updateString())).toEqual(expectedResult);
  });

  it('Should handle the stringUpdated action correctly', () => {
    const expectedResult = produce(state, newState => {
      newState.loading = false;
      newState.error = false;
    });

    expect(stringViewerReducer(state, stringUpdated())).toEqual(expectedResult);
  });

  it('Should handle the stringUpdatingError action correctly', () => {
    const expectedResult = produce(state, newState => {
      newState.loading = false;
      newState.error = true;
    });

    expect(stringViewerReducer(state, stringUpdatingError())).toEqual(
      expectedResult,
    );
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
