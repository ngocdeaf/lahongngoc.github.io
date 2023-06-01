const express = require('express');
const BookModel = require('../models/BookModel');
const router = express.Router();

router.get('/', async (req, res) => {
  var books = await BookModel.find({});
  console.log(books);
  res.send(books);
})

module.exports = router;