/*
 *
 * StringViewer actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_STRINGS_REQUEST,
  UPDATE_STRINGS_SUCCESS,
  UPDATE_STRINGS_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateString() {
  return {
    type: UPDATE_STRINGS_REQUEST,
  };
}
export function stringUpdated(strings) {
  return {
    type: UPDATE_STRINGS_SUCCESS,
    strings,
  };
}
export function stringUpdatingError() {
  return {
    type: UPDATE_STRINGS_FAILURE,
  };
}
