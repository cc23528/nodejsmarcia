// dbConfig.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_seu_banco',
});

connection.connect((err) => {
if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
}
console.log('Conexão com o banco de dados estabelecida');
});

module.exports = connection;
