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
import StringInput from 'components/StringInput';
import { updateString, postString } from './actions';
import {
  makeSelectUIString,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export function StringAdder({ loading, error, uiString, onChange, onSubmit }) {
  useInjectReducer({ key: 'stringAdder', reducer });
  useInjectSaga({ key: 'stringAdder', saga });

  if (error) {
    return <div>There is an error!</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Dovenmuehle Tech Screen</title>
        <meta
          name="description"
          content="This page allows you to add a string to the list"
        />
      </Helmet>
      <StringInput
        value={uiString}
        onInputChange={onChange}
        onSubmit={onSubmit}
        buttonText="Add"
        disabled={loading}
      />
    </div>
  );
}

StringAdder.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  uiString: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  uiString: makeSelectUIString(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  const onChange = string => {
    dispatch(updateString(string));
  };

  const onSubmit = string => {
    dispatch(postString(string));
  };

  return {
    onChange,
    onSubmit,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StringAdder);
