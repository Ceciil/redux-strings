/**
 *
 * Tests for StringViewer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringViewer, mapDispatchToProps } from '../index';

import configureStore from '../../../configureStore';

// import 'jest-dom/extend-expect'; // add some helpful assertions

describe('<StringViewer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  const props = {
    getStrings: jest.fn().mockResolvedValue([]),
  };

  it.only('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringViewer loading={false} error={false} strings={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should call getStrings on mount', () => {
    expect(props.getStrings).toHaveBeenCalled();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<StringViewer dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('getStrings', () => {
      it('Should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getStrings).toBeDefined();
      });

      it('Should dispatch getStrings when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.getStrings({ target: { strings: [] } });
        expect(dispatch).toHaveBeenCalledWith();
      });
    });
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<StringViewer />);
    expect(firstChild).toMatchSnapshot();
  });
});
