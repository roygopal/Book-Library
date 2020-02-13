const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookLibrarySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    total_pages: {
        type: Number,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date
});


var books = mongoose.model('books', BookLibrarySchema);
module.exports = books;
