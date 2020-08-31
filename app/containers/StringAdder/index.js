/**
 *
 * StringAdder
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStringAdder from './selectors';
import reducer from './reducer';
import saga from './saga';

export function StringAdder() {
  useInjectReducer({ key: 'stringAdder', reducer });
  useInjectSaga({ key: 'stringAdder', saga });

  return (
    <div>
      <Helmet>
        <title>StringAdder</title>
        <meta name="description" content="Description of StringAdder" />
      </Helmet>
    </div>
  );
}

StringAdder.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stringAdder: makeSelectStringAdder(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StringAdder);
