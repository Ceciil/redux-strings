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
import makeSelectStringAdder from './selectors';
import reducer, { initialState } from './reducer';
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
        <title>StringAdder</title>
        <meta name="description" content="Description of StringAdder" />
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

const mapStateToProps = state => state.stringAdder || initialState;

// const mapStateToProps = createStructuredSelector({
//   stringAdder: makeSelectStringAdder(),
// });

function mapDispatchToProps(dispatch) {
  const onChange = string => {
    dispatch({ type: 'UPDATE_UI_STRING', uiString: string });
  };

  const onSubmit = string => {
    dispatch({ type: 'ADD_STRING', string });
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
