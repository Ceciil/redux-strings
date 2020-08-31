/**
 *
 * StringInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StringInput({ value, onInputChange, onSubmit, buttonText, disabled }) {
  return (
    <div>
      <input
        value={value}
        onChange={event => {
          onInputChange(event.target.value);
        }}
        disabled={disabled}
      />
      <button
        type="button"
        onClick={() => {
          onSubmit(value);
        }}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
}

StringInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default StringInput;
