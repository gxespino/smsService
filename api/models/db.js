'user strict';

var mysql = require('mysql');

// local mysql db connection
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'user',
//   password : 'password',
//   database : 'mydb'
// });

const connection = mysql.createConnection({
  host:     '35.232.117.46',
  user:     'keeper',
  password: 'everypenny',
  database: 'test'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
