import {
  defaultAction,
  updateString,
  stringUpdated,
  stringUpdatingError,
} from '../actions';

import {
  DEFAULT_ACTION,
  UPDATE_STRINGS_REQUEST,
  UPDATE_STRINGS_SUCCESS,
  UPDATE_STRINGS_FAILURE,
} from '../constants';

describe('StringViewer actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });

  describe('updateString', () => {
    it('should return the correct type', () => {
      const expected = {
        type: UPDATE_STRINGS_REQUEST,
      };
      expect(updateString()).toEqual(expected);
    });
  });

  describe('stringUpdated', () => {
    it('should return the correct type and an array', () => {
      const expected = {
        type: UPDATE_STRINGS_SUCCESS,
      };
      expect(stringUpdated()).toEqual(expected);
    });
  });

  describe('stringUpdatingError', () => {
    it('should return the correct type', () => {
      const expected = {
        type: UPDATE_STRINGS_FAILURE,
      };
      expect(stringUpdatingError()).toEqual(expected);
    });
  });
});
