const mongoose = require('mongoose')

var BookSchema = mongoose.Schema ({
    name : String,
    author : String,
    genre : String,
    Price : Number,
    Cover : String
});

const BookModel = mongoose.Model("BOOK", BookSchema, "book");
//book : tên collection

module.exports = BookModel;