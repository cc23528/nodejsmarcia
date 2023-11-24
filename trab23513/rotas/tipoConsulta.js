// rotas/tipoConsulta.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// Listar tipos de consulta
router.get('/listar', (req, res) => {
  db.query('SELECT * FROM TipoConsulta', (err, result) => {
    if (err) {
      res.status(500).send('Erro ao buscar tipos de consulta.');
      throw err;
    }
    res.render('tipoConsulta/listarTiposConsulta', { tiposConsulta: result });
  });
});

module.exports = router;
