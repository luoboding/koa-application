"use strict";

var pool = require('./../../lib/db');
var co = require('co');
module.exports = {
  login: function (username, passwod) {
    return co(function *loginGenerator() {
        try {
          return yield pool.query('SELECT * FROM user WHERE username = ' + username + ' and passwod= ' +passwod);
        } catch (e) {
          throw e;
        }
    });
  },
  generateToken: function (userID) {
    //INSERT INTO `user_auth_log` VALUES (userID, expireTime);
    return co(function *tokenGenerator () {
      try {
        return yield pool.query('sql here');
      } catch (e) {
        throw e;
      }
    });
  },
  register: function (username, password) {
    return co(function *reigster() {
      try {
        return yield pool.query("INSER INTO user VALUES (" + username +", " + password + ")");
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
