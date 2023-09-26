const app = require("../../config/express");


module.exports = (app) => {
    // EVITAR PROBLEMAS COM OS CORS
    app.use((req,res, next) => {
        res.header("Acess-Control-Allow-Origin", "*");
        next();
        
    })
    const clientesController = require("../CONTROLLERS/CON_clientes");
    const cliController = new clientesController();
}
app.get("/home",(req,res) => {
    console.log("Utilizando rota /home");
    res.send("Olha a console");
});

app.get("/listaClientesEJS", cliController.e()
