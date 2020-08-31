import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringAdder state domain
 */

const selectStringAdderDomain = state => state.stringAdder || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StringAdder
 */

const makeSelectUIString = () =>
  createSelector(
    selectStringAdderDomain,
    substate => substate.uiString,
  );

const makeSelectLoading = () =>
  createSelector(
    selectStringAdderDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectStringAdderDomain,
    substate => substate.error,
  );

export {
  selectStringAdderDomain,
  makeSelectUIString,
  makeSelectLoading,
  makeSelectError,
};
