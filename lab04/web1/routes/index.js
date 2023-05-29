var express = require('express');
var router = express.Router();

router.get('/', (request, respond) => {
  //console.log("This is home page");
  //respond.send("<h1 style='color: red;'>This is home page</h1>")
  respond.render('homepage')  //render ra file view homepage.hbs
})

router.get('/gch1102', (req, res) => {
  var class_name = 'gch1102';
  var module_name = 'cloud computing';
  var teacher_name = 'longndt';
  res.render('gch1102', { lop_hoc: class_name, mon_hoc: module_name, giang_vien: teacher_name });
})

router.get('/vietnam', (req, res) => {
  var vietnam = {
    "name": "Việt Nam",
    "capital": "Hà Nội",
    "population": "90 millions people",
    "location": "South East Asia",
    "introduction": "A peaceful country",
    "image": "https://img.freepik.com/premium-vector/vietnam-map-landmarks-with-people-traditional-clothing_281368-239.jpg?w=2000"
  };
  res.render("vietnam", { vietnam: vietnam });
})

router.get('/employee', (req, res) => {
  var employees =
    [
      {
        "name": "tuan",
        "age": 35,
        "gender": "Male"
      },
      {
        "name": "minh",
        "age": 32,
        "gender": "Male"
      },
      {
        "name": "phuong",
        "age": 30,
        "gender": "Female"
      },
      {
        "name": "hang",
        "age": 25,
        "gender": "Female"
      }
    ]
   res.render("employee", { employees : employees}); 
})

module.exports = router;
