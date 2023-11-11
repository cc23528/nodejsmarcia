// rotas/medico.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// Listar médicos
router.get('/listar', (req, res) => {
  db.query('SELECT * FROM Medico', (err, result) => {
    if (err) throw err;
    res.render('medico/listarMedicos', { medicos: result });
});
});

// Adicionar médico
router.get('/adicionar', (req, res) => {
    res.render('medico/adicionarMedico');
});

// Editar médico
router.get('/editar/:id', (req, res) => {
const medicoId = req.params.id;
  db.query('SELECT * FROM Medico WHERE id = ?', [medicoId], (err, result) => {
    if (err) throw err;
    res.render('medico/editarMedico', { medico: result[0] });
});
});

// Excluir médico
router.get('/excluir/:id', (req, res) => {
    const medicoId = req.params.id;
    db.query('DELETE FROM Medico WHERE id = ?', [medicoId], (err, result) => {
    if (err) throw err;
    res.send(`Médico ${medicoId} excluído!`);
    });
});

module.exports = router;
