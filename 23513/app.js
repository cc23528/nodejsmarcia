const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const clienteControlador = require('./clienteControlador'); // Substitua pelo nome do seu controlador

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const connection = mysql.createConnection({
  host: 'seu_host_mysql',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'seu_banco_de_dados',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o banco de dados: ' + err);
  } else {
    console.log('Conexão com o banco de dados estabelecida');
  }
});

app.get('/listagemClientes', clienteControlador.listagemClientes); // Adicione a rota da listagem de clientes
app.get('/exclusaoClientes/deleta/:id', clienteControlador.deletarClientes); // Rota de exclusão

app.listen(3000, () => {
  console.log('Servidor Node.js em execução na porta 3000');
});
