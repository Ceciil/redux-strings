/*
 *
 * StringViewer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  strings: ['small', 'cat'],
};

/* eslint-disable default-case, no-param-reassign */
const stringViewerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default stringViewerReducer;
