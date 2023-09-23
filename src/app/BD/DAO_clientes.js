class DAO_clientes {
    // construtor
    constructor(bd) {
        this._bd = bd;
    }
    // SELECT NA TABELA CLIENTES
    dadosDosClientesEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie) '
            this._bd.query(sql,function(erro,recorset)
        {
            if(erro)
            {
                console.log(erro);
                return reject("Lista de CLientes FALHOU!");

            }
            resolve(recordset);
        });
    });

    }
}   // end da classe

module.exports = DAO_clientes;