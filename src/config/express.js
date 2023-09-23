const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const rotas = require("../app/ROTAS/rotas");
rotas(app);

// Habilitar o body-parser a receber os dadods em JSN (JASON)

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

module.exports = app;