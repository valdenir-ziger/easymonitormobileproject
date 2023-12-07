const controllerAPI = require('../server/controllers/controllerAPI');
const express       = require('express');
const route         = express.Router();

route.get("/api", (req, res) => {
    console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date())

    var mensagem = "Server ON-LINE!";
    console.log(mensagem);
    res.status(200).json({"data": {"codigo": 200, "mensagem": mensagem }});
});

//Login
route.post("/api/login", controllerAPI.postLogin);

//Pessoa
route.get("/api/buscapessoa/:id"     , controllerAPI.getPessoaById);
route.get("/api/pessoas"             , controllerAPI.getPessoa);
route.post("/api/cadastrarpessoa"    , controllerAPI.postPessoa);
route.put('/api/editarpessoa/:id'    , controllerAPI.putPessoa);

// route.use('/', (req, res, next) => {
//     res.status(404).json({error : "Essa Página Não Funciona"});
// });

module.exports = route;