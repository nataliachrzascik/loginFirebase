import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const middlewares = [logger]
//array for more middleware in the future

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))

)
export default store;