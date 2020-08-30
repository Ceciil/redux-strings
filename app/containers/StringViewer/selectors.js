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

const makeSelectStringViewer = () =>
  createSelector(
    selectStringViewerDomain,
    substate => substate,
  );

export default makeSelectStringViewer;
export { selectStringViewerDomain };
