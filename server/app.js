var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
var cors = require('cors')

dotenv.config({ path: './.env' });

var indexRouter = require('./src/routes/index');
var loginRouter = require('./src/routes/login')
const privatePaths = ['api']

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


function authenticateToken(req, res, next) {
  if (privatePaths.filter(p => {
    return req.path.indexOf(p) >= 0
  }).length != 0) return next();
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// catch 404 and forward to error handler
app.all('*', authenticateToken)
app.use('/api', indexRouter);
app.use('/authorization', loginRouter)
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
  res.render('error');
});

module.exports = app;
