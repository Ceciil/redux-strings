/**
 *
 * Asynchronously loads the component for StringViewer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
