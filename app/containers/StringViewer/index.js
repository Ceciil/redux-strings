/**
 *
 * StringViewer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import StringList from 'components/StringList';
import makeSelectStringViewer from './selectors';
import reducer, { initialState } from './reducer';
import saga from './saga';

export function StringViewer({ strings }) {
  useInjectReducer({ key: 'stringViewer', reducer });
  useInjectSaga({ key: 'stringViewer', saga });

  return (
    <div>
      <Helmet>
        <title>StringViewer</title>
        <meta name="description" content="Description of StringViewer" />
      </Helmet>

      <StringList strings={strings} />
    </div>
  );
}

StringViewer.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.stringViewer || initialState;

// const mapStateToProps = createStructuredSelector({
//   stringViewer: makeSelectStringViewer(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StringViewer);
