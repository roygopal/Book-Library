import { GET_BOOKS, UPDATE_BOOK } from '../actions/ActionTypes';

const initialState = {
    books: []
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        case UPDATE_BOOK:
            const updatedBooks = state.books.map(book => {
                if(book._id === action.payload._id){
                    return { ...book, ...action.payload}
                }
                return book;
            });
            return {
                books: updatedBooks
            };
        default:
            return state;
    }
}
