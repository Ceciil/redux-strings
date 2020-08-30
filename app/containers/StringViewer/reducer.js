/*
 *
 * StringViewer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  loading: false,
  error: false,
  strings: ['small', 'cat'],
};

/* eslint-disable default-case, no-param-reassign */
const stringViewerReducer = (state = initialState, action) =>
  produce(state, newState => {
    switch (action.type) {
      case 'UPDATE_STRINGS_REQUEST':
        newState.loading = true;
        newState.error = false;
        break;
      case 'UPDATE_STRINGS_SUCCESS':
        newState.loading = false;
        newState.error = false;
        newState.strings = action.strings;
        break;
      case 'UPDATE_STRINGS_FAILURE':
        newState.loading = false;
        newState.error = true;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default stringViewerReducer;
