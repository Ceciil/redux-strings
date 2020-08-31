/*
 *
 * StringAdder reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  uiString: 'Angela',
};

/* eslint-disable default-case, no-param-reassign */
const stringAdderReducer = (state = initialState, action) =>
  produce(state, newState => {
    switch (action.type) {
      case 'ADD_STRING_REQUEST':
        newState.loading = true;
        newState.error = false;
        break;
      case 'ADD_STRING_SUCCESS':
        newState.loading = false;
        newState.error = false;
        break;
      case 'ADD_STRING_FAILURE':
        newState.loading = false;
        newState.error = true;
        break;
      // UI State Reducers
      case 'UPDATE_UI_STRING':
        newState.uiString = action.uiString;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default stringAdderReducer;