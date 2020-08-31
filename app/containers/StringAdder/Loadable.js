/**
 *
 * Asynchronously loads the component for StringAdder
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
