"use strict";

var pool = require('./../../lib/db');
var co = require('co');
module.exports = {
  create: function (news) {
    return co(function *createNews() {
        return yield pool.query('select * from user');
    });
  },
  get: function(id) {
    return co(function *getNews () {
      try {
        return yield pool.query('SELECT * FROM user WHERE ID=' + id);
      } catch (e) {
        throw e;
      }
    });
  }
}
