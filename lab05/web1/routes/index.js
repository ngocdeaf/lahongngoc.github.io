var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/input', (req, res) => {
  res.render('form')
})

router.post('/output', (req, res) => {
  var data = req.body;
  res.send(data);
})

module.exports = router;
