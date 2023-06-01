var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/input',(req, res) => {
  res.render('form')
})

router.post('/output', (req,res) =>{
  var laptop = req.body;
  // res.send(data);
  res.render('result',{laptop:laptop})
})
module.exports = router;