
// Connection 객체 생성 
var mysql = require('mysql');
// var pool = mysql.createPool({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',   
//   password: 'whdkfk1!',
//   database: 'test_schema'  
// });  
var pool = mysql.createPool({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'bc7e03e97e8a9b',
  port: 3306,
  password: 'aef17477',
  database: 'heroku_5972366acc6e235'
})


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3030);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 정보 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/movies', moviesRouter);

app.use(require('connect-history-api-fallback')())

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
 
// http.createServer(app).listen(app.get('port'), function(req,res) {
//   console.log('익스프레스 서버 시작 : ' + app.get('port'));
// });

module.exports = app; 