import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringViewer state domain
 */

const selectStringViewerDomain = state => state.stringViewer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StringViewer
 */

const makeSelectStrings = () =>
  createSelector(
    selectStringViewerDomain,
    substate => substate.strings,
  );

const makeSelectLoading = () =>
  createSelector(
    selectStringViewerDomain,
    substate => substate.laoding,
  );
const makeSelectError = () =>
  createSelector(
    selectStringViewerDomain,
    substate => substate.error,
  );

export {
  selectStringViewerDomain,
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
};
