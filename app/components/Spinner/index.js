/**
 *
 * Spinner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Loading = styled.div`
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #1c87c9;
  border-radius: 50%;
  content: '';
  height: 50px;
  width: 50px;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
`;

function Spinner() {
  return <Loading />;
}

Spinner.propTypes = {};

export default Spinner;
