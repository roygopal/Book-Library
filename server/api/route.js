const express = require('express');
const router = express.Router();
const Book = require('../models/BookModel');

router.get('/', (req, res) => {
    Book.find({})
        .then((bookItems) => res.json(bookItems))
        .catch(() => res.status(404).json({success: false}));
});

router.post('/', (req, res) => {
    const {
        name,
        author,
        description,
        total_pages
    } = req.body;

    const newBook = new Book({
        name: name,
        author: author,
        description: description,
        total_pages: total_pages,
    });

    newBook.save().then(bookItem => res.json(bookItem));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, bookItem) => {
            if (err) return res.status(500).send(err);
            return res.send(bookItem);
        }
    );
});

module.exports = router;
