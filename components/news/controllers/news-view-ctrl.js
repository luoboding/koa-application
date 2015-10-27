"use strict";
var route = require('koa-route');
var NewsService = require('./../service/index');
var views = require('co-views');
var swig  = require('swig');

var render = views(__dirname + '/../../views', {
  map: { html: 'swig' }
});

module.exports = function(app) {
  return function *show(id) {
      var that = this;
      function *loadData() {
        return NewsService.get(id).then(function(data) {
          return render('show', { user: data[0] })
        }).catch(function () {
          return that.throw(404, '未能找到相关数据');
        });
      }
      this.body = yield loadData;
    };
}
