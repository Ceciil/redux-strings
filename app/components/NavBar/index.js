/**
 *
 * NavBar
 *
 */

import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

function NavBar() {
  return (
    <Wrapper>
      <Link to="/view">View Strings</Link>
      <Link primary="true" to="/input">
        Input a String
      </Link>
    </Wrapper>
  );
}

NavBar.propTypes = {};

export default NavBar;
