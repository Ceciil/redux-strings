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

const makeSelectStringAdder = () =>
  createSelector(
    selectStringAdderDomain,
    substate => substate,
  );

export default makeSelectStringAdder;
export { selectStringAdderDomain };
