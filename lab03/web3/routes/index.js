var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo1', (req, res) => {
  var letter = 'a';
  var string = 'Greenwich Vietnam';
  var integer = 2023;
  var double = 3.14;
  var array = [10, 20, 30, 40, 50];

  res.render('demo1', 
    { ky_tu : letter ,
      chuoi : string ,
      so_nguyen : integer,
      so_thuc : double,
      mang : array,
    });
});

router.get('/demo2', (req, res) => {
   var person = {
      "name" : "Minh",
      "age" : 30
   };

   var motorbike = {
      "brand" : "Honda",
      "model" : "SH",
      "color" : "White",
      "price" : 49999.99
   };

   res.render('demo2', { person: person, motorbike: motorbike});
})

router.get('/demo3', (req, res) => {
  var student1 = {
    "id"   : 1,
    "name" : "Tuan Minh",
    "dob"  : "05/09/2000",
    "gender" : "Male",
    "mobile" : "0912345678",
    "email" : "tuanminh@fpt.edu.vn"
  };
  var student2 = {
    "id" : 2,
    "name": "Phuong Linh",
    "dob": "05/06/2000",
    "gender": "Female",
    "mobile": "0988888888",
    "email": "phuonglinh@fpt.edu.vn"
  };
  var student3 = {
    "id" : 3,
    "name": "Hoang Anh",
    "dob": "25/09/2000",
    "gender": "Male",
    "mobile": "0968686868",
    "email": "hoanganh@fpt.edu.vn"
  };
  var students = [student1, student2, student3];
  res.render('demo3', {students : students})
})

module.exports = router;
