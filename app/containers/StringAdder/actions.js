/*
 *
 * StringAdder actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_STRING_REQUEST,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
  UPDATE_UI_STRING,
  POST_STRING,
} from './constants';

export function addString() {
  return {
    type: ADD_STRING_REQUEST,
  };
}

export function stringAdded() {
  return {
    type: ADD_STRING_SUCCESS,
  };
}

export function stringAddingError() {
  return {
    type: ADD_STRING_FAILURE,
  };
}

export function updateString(uiString) {
  return {
    type: UPDATE_UI_STRING,
    uiString,
  };
}

export function postString(string) {
  return {
    type: POST_STRING,
    string,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
