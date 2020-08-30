/**
 *
 * StringList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StringList({ strings }) {
  const list = strings.map(string => <div key={string}>{string}</div>);

  return <div>{list}</div>;
}

StringList.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StringList;
