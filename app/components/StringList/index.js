/**
 *
 * StringList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StringList({ strings }) {
  // TODO: Use uuid for unique keys
  const list = strings.map((string, i) => <div key={string + i}>{string}</div>);

  return <div>{list}</div>;
}

StringList.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StringList;
