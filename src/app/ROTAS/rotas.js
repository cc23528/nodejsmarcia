const app = require("../../config/express");

module.exports = (app) => {
    // EVITAR PROBLEMAS COM OS CORS
    app.use((req,res, next) => {
        res.header("Acess-Control-Allow-Origin", "*");
        next();
        
    })
}
app.get("/home", (req,res) => {
    console.log("Utilizando rota /homer");
    res.send("Olha a console");
})