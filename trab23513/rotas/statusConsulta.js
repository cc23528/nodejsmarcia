// rotas/statusConsulta.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// Listar status de consulta
router.get('/listar', (req, res) => {
  db.query('SELECT * FROM StatusConsulta', (err, result) => {
    if (err) throw err;
    res.render('statusConsulta/listarStatusConsultas', { statusConsultas: result });
    });
});

// Adicionar status de consulta
router.get('/adicionar', (req, res) => {
    res.render('statusConsulta/adicionarStatusConsulta');
});

// Editar status de consulta
router.get('/editar/:id', (req, res) => {
    const statusConsultaId = req.params.id;
  db.query('SELECT * FROM StatusConsulta WHERE id = ?', [statusConsultaId], (err, result) => {
    if (err) throw err;
    res.render('statusConsulta/editarStatusConsulta', { statusConsulta: result[0] });
    });
});

// Excluir status de consulta
router.get('/excluir/:id', (req, res) => {
    const statusConsultaId = req.params.id;
    db.query('DELETE FROM StatusConsulta WHERE id = ?', [statusConsultaId], (err, result) => {
    if (err) throw err;
    res.send(`Status de Consulta ${statusConsultaId} excluído!`);
    });
});

module.exports = router;
