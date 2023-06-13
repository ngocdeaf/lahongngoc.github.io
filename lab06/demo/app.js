var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Cấu hình body-parser (lấy dữ liệu từ form)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}));

// Cấu hình mongoose (làm việc với DB)
var mongoose = require('mongoose');
var uri = "mongodb+srv://Langoc:FNwrjNV4VbZmaAdZ@cluster0.ynout2p.mongodb.net/GCH1102"; //gch1102 : DB's name
mongoose.connect(uri)
.then(() => {console.log ("succeed!")})
.catch((err) => { console.log ("Failed!") });

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = 3001;
app.listen(port);

module.exports = app;
