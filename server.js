const app = require("./src/config/express")
const porta = 3000;

// Incializacao de servidor 

app.listen(porta, (req,res) =>{
    console.log("Server ON!")

})