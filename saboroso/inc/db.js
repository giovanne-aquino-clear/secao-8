const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  database: 'saboroso',
  password: 'clear2022',
  multipleStatements: true
});

module.exports = connection;