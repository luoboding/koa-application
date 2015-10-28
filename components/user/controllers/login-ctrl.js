"use strict";
var route = require('koa-route');
var views = require('co-views');
var swig  = require('swig');
var parse = require('co-body');

var render = views(__dirname + '/../../views', {
  map: { html: 'swig' }
});

module.exports = function(app) {
  return function *login(id) {
      var that = this;
      var data = yield parse(this);
      //deal data.username, data.password
      function *login() {
        return that.throw(200);
      }
      this.body = yield login;
    };
}
