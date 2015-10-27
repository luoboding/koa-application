"use strict";

var mysql = require("mysql");
var wrapper = require('co-mysql');

var pool = mysql.createConnection({
  host            : 'localhost',
  port            : '3306',
  user            : 'root',
  password        : '',
  database        : 'dev'
});

module.exports = wrapper(pool);
