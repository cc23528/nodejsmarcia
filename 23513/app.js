const express = require('express');
const app = express();
const port = 3000;

// Configurando o middleware para lidar com dados JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurando o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/visualizacoes');

// Roteadores
const clientesRouter = require('./rotas/clientes');
const usuariosRouter = require('./rotas/usuarios');
const consultasRouter = require('./rotas/consultas');

// Rotas principais
app.use('/clientes', clientesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/consultas', consultasRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
