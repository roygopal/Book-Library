import axios from 'axios';
import { GET_BOOKS, UPDATE_BOOK, ADD_BOOK } from './ActionTypes';

export const getBooks = () => dispatch => {
    axios.get('/api/books').then(res =>
        dispatch({
            type: GET_BOOKS,
            payload: res.data
        })
    );
};

export const updateBookDetail = bookDetail => dispatch => {
    axios.put(`/api/books/${bookDetail.id}`, bookDetail)
        .then(res =>
            dispatch({
                type: UPDATE_BOOK,
                payload: res.data
            })
        );
};

export const addBook = bookDetail => dispatch => {
    axios.post('/api/books', bookDetail)
        .then(res =>
            dispatch({
                type: ADD_BOOK,
                payload: res.data
            })
        )
};
