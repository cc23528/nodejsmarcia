// rotas/consulta.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// Listar consultas
router.get('/listar', (req, res) => {
  db.query('SELECT * FROM ConsultaMedica', (err, result) => {
    if (err) throw err;
    res.render('consulta/listarConsultas', { consultas: result });
  });
});

// Adicionar consulta
router.get('/adicionar', (req, res) => {
  res.render('consulta/adicionarConsulta');
});

// Editar consulta
router.get('/editar/:id', (req, res) => {
    const consultaId = req.params.id;
  db.query('SELECT * FROM ConsultaMedica WHERE id = ?', [consultaId], (err, result) => {
    if (err) throw err;
    res.render('consulta/editarConsulta', { consulta: result[0] });
    });
});

// Excluir consulta
router.get('/excluir/:id', (req, res) => {
    const consultaId = req.params.id;
    db.query('DELETE FROM ConsultaMedica WHERE id = ?', [consultaId], (err, result) => {
    if (err) throw err;
    res.send(`Consulta ${consultaId} excluída!`);
    });
});

module.exports = router;
