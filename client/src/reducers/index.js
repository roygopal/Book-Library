import { combineReducers } from 'redux';
import bookReducer from './BookReducer';

export default combineReducers({
    books: bookReducer
});
