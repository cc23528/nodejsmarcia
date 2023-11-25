// dbConfig.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD23513',
    password: 'BD23513',
    database: 'BD23513',
    connectTimeout: 15000 // Tempo limite em milissegundos
});

connection.connect((err) => {
if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
}
console.log('Conexão com o banco de dados estabelecida');
});

module.exports = connection;
