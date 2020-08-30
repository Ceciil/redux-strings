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
import makeSelectStringViewer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function StringViewer() {
  useInjectReducer({ key: 'stringViewer', reducer });
  useInjectSaga({ key: 'stringViewer', saga });

  return (
    <div>
      <Helmet>
        <title>StringViewer</title>
        <meta name="description" content="Description of StringViewer" />
      </Helmet>
    </div>
  );
}

StringViewer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stringViewer: makeSelectStringViewer(),
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

export default compose(
  withConnect,
  memo,
)(StringViewer);
