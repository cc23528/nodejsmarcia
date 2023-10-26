const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'BD23513',
  user: 'BD23513',
  password: '12345',
  database: 'Listagem c/ Node',
});

module.exports = connection;
