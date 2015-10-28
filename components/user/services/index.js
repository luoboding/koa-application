"use strict";

var pool = require('./../../lib/db');
var co = require('co');
module.exports = {
  login: function (username, passwod) {
    return co(function *loginGenerator() {
        try {
          return yield pool.query('SELECT * FROM user WHERE ID=' + id);
        } catch (e) {
          throw e;
        }
    });
  },
  userDetail: function(id) {
    return co(function *userDetailGenerator() {
        try {
          return yield pool.query('SELECT * FROM user WHERE ID=' + id);
        } catch (e) {
          throw e;
        }
    });
  }
}
