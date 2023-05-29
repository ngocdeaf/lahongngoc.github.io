var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login');
})

router.post('/result', (req, res) => {
  //get input data from client's request
   var data = req.body;
   var username = req.body.username;
   var password = req.body.password;

   var check;
   //console.log(data);

   if (username == "admin" && password == 123456) {
     //res.send("<h1>Login passed</h1>")
     check = "Passed";
   } else {
     //res.send("<h1>Login failed</h1>")
     check = "Failed";
   }

   //res.send(data);
   res.render('result', { result : check });
})

module.exports = router;
