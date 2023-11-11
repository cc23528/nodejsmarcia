// app.js
const express = require('express');
const bodyParser = require('body-parser');
const medicoRouter = require('./rotas/medico');
const pacienteRouter = require('./rotas/paciente');
const consultaRouter = require('./rotas/consulta');
const especialidadeRouter = require('./rotas/especialidade');
const tipoConsultaRouter = require('./rotas/tipoConsulta');
const statusConsultaRouter = require('./rotas/statusConsulta');
const indexRouter = require('./rotas/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/medico', medicoRouter);
app.use('/paciente', pacienteRouter);
app.use('/consulta', consultaRouter);
app.use('/especialidade', especialidadeRouter);
app.use('/tipoConsulta', tipoConsultaRouter);
app.use('/statusConsulta', statusConsultaRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
