//khai báo thư viện Express và Router
var express = require('express');
var router = express.Router();

//URL : localhost:(port)/student/add
router.get('/add', (req, res) => {
   res.render('student/add');
});

//URL: localhost:(port)/student/info
router.post('/information', (req, res) => {
  var student = req.body;
  res.render('student/information', { student : student });
});

//export module
module.exports = router;