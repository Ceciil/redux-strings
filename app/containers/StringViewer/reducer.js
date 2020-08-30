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
  uiString: 'Angela',
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
      case 'ADD_STRING':
        newState.strings = [...newState.strings, action.string];
        break;

      // UI State Reducers
      case 'UPDATE_UI_STRING':
        newState.uiString = action.uiString;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default stringViewerReducer;
