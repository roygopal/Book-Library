import { createStore, applyMiddleware, compose } from 'redux';
// When this middleware is enabled, if you dispatch a function, Redux Thunk middleware 
// will give it dispatch as an argument.
import thunk from 'redux-thunk';
import mainReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(mainReducer, initialState, compose(
    applyMiddleware(...middleware)
));


export default store;
