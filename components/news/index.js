"use strict";

var route = require('koa-route');
module.exports = function (rootApp) {
  var show = require('./controllers/news-view-ctrl')(rootApp);
  rootApp.use(route.get('/post/:id', show));
};
