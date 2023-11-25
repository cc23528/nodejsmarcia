// rotas/especialidade.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// Listar especialidades
router.get('/listar', (req, res) => {
  db.query('SELECT * FROM EspecialidadeMedica', (err, result) => {
    if (err) {
      console.error('Erro ao buscar especialidades:', err);
      throw err;
    }
    console.log('Resultado da consulta:', result); // Verifique o resultado da consulta
    res.render('especialidade/listarEspecialidades', { especialidades: result });
  });
});


// Adicionar especialidade
router.get('/adicionar', (req, res) => {
    res.render('especialidade/adicionarEspecialidade');
});

// Editar especialidade
router.get('/editar/:id', (req, res) => {
    const especialidadeId = req.params.id;
  db.query('SELECT * FROM EspecialidadeMedica WHERE id = ?', [especialidadeId], (err, result) => {
    if (err) throw err;
    res.render('especialidade/editarEspecialidade', { especialidade: result[0] });
    });
});

// Excluir especialidade
router.get('/excluir/:id', (req, res) => {
    const especialidadeId = req.params.id;
    db.query('DELETE FROM EspecialidadeMedica WHERE id = ?', [especialidadeId], (err, result) => {
    if (err) throw err;
    res.send(`Especialidade ${especialidadeId} excluída!`);
    });
});

module.exports = router;
