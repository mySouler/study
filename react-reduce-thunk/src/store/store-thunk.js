import {applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reduce from './index-thunk';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(
    reduce,
    middleware,
);