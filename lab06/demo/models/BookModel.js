const mongoose = require('mongoose')

var BookSchema = mongoose.Schema ({
    name : String,
    author : String,
    genre : String,
    Price : Number,
    Cover : String,
    publisher : String,
    video : String
});

const BookModel = mongoose.model("BOOK", BookSchema, "book");
//book : tên collection

module.exports = BookModel;