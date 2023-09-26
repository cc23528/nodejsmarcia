const clientesDAO = require("../BD/DAO_clientes");
const bd = require("../../config/database");

class CON_clientes{
    exibeDadosClientesEJS(){
        return function(req,res){
            const cliDAO = new clientesDAO(bd);
            cliDAO.dadosDosClientesEJS()
                .then((resultados) => {
                    console.log(resultados);
                    res.render('../views/ejs/listaClientes', { clientes: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
} // end da classe

module.exports = CON_clientes;