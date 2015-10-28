"use strict";

var koa = require('koa');
var logger = require('koa-logger');

var app = koa();
app.use(logger());
require('./components/news')(app);
require('./components/user')(app);
app.listen(8080);
