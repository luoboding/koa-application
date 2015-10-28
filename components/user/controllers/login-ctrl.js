"use strict";
var route = require('koa-route');
var views = require('co-views');
var swig  = require('swig');
var parse = require('co-body');
var UserService = require('./../service/index');
var render = views(__dirname + '/../../views', {
  map: { html: 'swig' }
});

module.exports = function(app) {
  return function *login(id) {
      var that = this;
      var data = yield parse(this);
      //deal data.username, data.password
      function *login() {
        if (!data.username) {
          return that.throw(400, '请输入用户名');
        }
        if (!data.password) {
          return that.throw(400, '请输入密码');
        }
        UserService.login(data.username, data.password).then(function() {
          //login successfully
        }).catch(function() {
          //login failed
        });
        return that.throw(200);
      }
      this.body = yield login;
    };
}
