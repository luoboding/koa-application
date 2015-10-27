"use strict";

var route = require('koa-route');

module.exports = function (rootApp) {
  var show = require('./controllers/news-view-ctrl')(rootApp);
  // console.log('show is ', show);
  // function *show(id) {
  //   var post = posts[id-1];
  //   if (!post) this.throw(404, 'invalid post id');
  //   this.body = yield render('show', { post: post });
  // }

  rootApp.use(route.get('/post/:id', show));
}
