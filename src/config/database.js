const mysql = require("mysql12");

const connection = mysql.createConnection({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD23513',
    password: 'BD23513',
    database: 'BD23513'

});

connection.connect(function (erro){
    if(erro)
        console.log("ERRO na CONEXAO com o BD23513");
    else
        console.log("CONEXAO com o BD23513 realizada com SUCESSO")
});

module.exports = connection;
