import { selectStringViewerDomain } from '../selectors';

describe('selectStringViewerDomain', () => {
  it('Should select the stringViewer state', () => {
    const strings = ['small', 'cat'];

    const stringViewerState = {
      data: {
        loading: false,
        error: false,
        strings,
      },
    };
    const mockedState = {
      stringViewer: stringViewerState,
    };
    expect(selectStringViewerDomain(mockedState)).toEqual(stringViewerState);
  });
});
