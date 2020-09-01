import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledLink = styled(Link)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgba(35, 1, 73, 1);
  color: rgba(35, 1, 73, 1);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-decoration: none;

  ${props =>
    props.primary &&
    css`
      background: rgba(35, 1, 73, 1);
      color: white;
    `}

  &:hover {
    background: rgba(35, 1, 73, 1);
    color: rgba(0, 219, 125, 1);
  }
`;

StyledLink.propTypes = {
  primary: PropTypes.string,
};

export default StyledLink;
