"use strict";

var route = require('koa-route');
module.exports = function (rootApp) {
  var login = require('./controllers/login-ctrl')(rootApp);
  rootApp.use(route.post('/user/login', login));
}
