// rotas/paciente.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// Listar pacientes
router.get('/listar', (req, res) => {
  db.query('SELECT * FROM Paciente', (err, result) => {
    if (err) throw err;
    res.render('paciente/listarPacientes', { pacientes: result });
    });
});

// Adicionar paciente
router.get('/adicionar', (req, res) => {
    res.render('paciente/adicionarPaciente');
});

// Editar paciente
router.get('/editar/:id', (req, res) => {
    const pacienteId = req.params.id;
  db.query('SELECT * FROM Paciente WHERE id = ?', [pacienteId], (err, result) => {
    if (err) throw err;
    res.render('paciente/editarPaciente', { paciente: result[0] });
    });
});

// Excluir paciente
router.get('/excluir/:id', (req, res) => {
    const pacienteId = req.params.id;
    db.query('DELETE FROM Paciente WHERE id = ?', [pacienteId], (err, result) => {
    if (err) throw err;
    res.send(`Paciente ${pacienteId} excluído!`);
    });
});

module.exports = router;
