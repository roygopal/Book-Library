import { combineReducers } from 'redux';
import bookReducer from './BookReducer';

/*
 Combine reducers takes a hash of reducers and returns a reducer. 
 The resulting reducer represents an object of the same shape as the hash.
*/
export default combineReducers({
    books: bookReducer
});
