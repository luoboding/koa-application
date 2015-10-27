"use strict";

var koa = require('koa');
var logger = require('koa-logger');

var app = koa();
app.use(logger());
require('./components/news')(app);
app.listen(8080);
