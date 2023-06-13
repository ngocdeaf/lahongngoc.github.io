const express = require('express');
const BookModel = require('../models/BookModel');
const router = express.Router();

router.get('/', async (req, res) => {
  var books = await BookModel.find({});
  // console.log(books);
  // res.send(books);
  res.render('book_list', {books : books})
})

router.get('/delete/:id' , async(req, res) => {
  var id = req.params.id;
  
  //SQL : DELETE * FROM Book WHERE id = 'id'
  await BookModel.findByIdAndDelete(id)
  .then(() => {console.log ("Delete Succeedful")})
  .catch((err) => {console.log (err)});
  res.redirect('/');
})

router.get('/deleteall', async (req, res)=> {
  await BookModel.deleteMany({})
  .then(() => {console.log("Delete all books succeed!") })
  .catch((err) => {console.log(err)});
  res.redirect('/');
})

router.get('/detail/:id', async (req, res) => {
  var book = await BookModel.findById(req.params.id);
  res.render('book_detail', {book : book})
})

router.post('/order', (req, res) => {
  var order = req.body;
  var title = order.title;
  var quantity = order.quantity;
  var price = order.price;
  var total = price * quantity;
  console.log("Book title: " +title);
  console.log("Order quantity: " +quantity);
})

module.exports = router;