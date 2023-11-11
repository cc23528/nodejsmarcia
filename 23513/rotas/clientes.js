const express = require('express');
const router = express.Router();

// Funcionalidades para clientes

// Listar clientes
router.get('/listar', (req, res) => {
  // Implementação para listar clientes
    res.render('clientes/listarClientes');
});

// Adicionar cliente
router.get('/adicionar', (req, res) => {
  // Implementação para adicionar cliente
    res.render('clientes/adicionarCliente');
});

// Editar cliente
router.get('/editar/:id', (req, res) => {
  // Implementação para editar cliente
    res.render('clientes/editarCliente', { id: req.params.id });
});

// Excluir cliente
router.get('/excluir/:id', (req, res) => {
  // Implementação para excluir cliente
    res.send(`Cliente ${req.params.id} excluído!`);
});

module.exports = router;
