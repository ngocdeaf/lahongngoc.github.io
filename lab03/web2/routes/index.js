var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Greenwich' });
});

router.get('/demo', (req, res) => {
  res.render('greenwich', { date : '23/05/2023'});
})

router.get('/hanoi', (req, res) => {
  var hn = 'Hanoi';
  var vn = 'Vietnam';
  res.render('hanoi', { a : hn, b : vn});
})

module.exports = router;
