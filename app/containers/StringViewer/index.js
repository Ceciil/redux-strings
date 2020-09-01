/**
 *
 * StringViewer
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import StringList from 'components/StringList';
import Spinner from 'components/Spinner';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export function StringViewer({ loading, error, strings, getStrings }) {
  useInjectReducer({ key: 'stringViewer', reducer });
  useInjectSaga({ key: 'stringViewer', saga });

  useEffect(() => {
    getStrings();
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>There is an error!</div>;
  }

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
  loading: PropTypes.bool,
  error: PropTypes.bool,
  strings: PropTypes.arrayOf(PropTypes.string),
  getStrings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  const getStrings = () => {
    dispatch({ type: 'GET_STRINGS' });
  };

  return {
    getStrings,
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
