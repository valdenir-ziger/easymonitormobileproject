const Pessoa   = require('../models/pessoa');
// const moment   = require('moment');
// const mongoose = require('mongoose');

var pessoaSessao;

module.exports = {
    //################ Login ##################################################
    async postLogin(req, res) {
        console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date());
        await Pessoa.findOne({login: req.body.login, 
                              senha: req.body.senha}).then((pessoas) => {
            if (pessoas != null) {
                if (pessoas.ocultado){
                    console.log("Usuário " + pessoas.login + " desativado!");
                    return res.status(401).json({"data": {"codigo": 401, pessoas }});
                }
                else{
                    pessoaSessao                = pessoas;
                    req.session.login           = pessoas.login;
                    req.session.user            = pessoas.nome;
                    req.session.tipo            = pessoas.tipo;
                    req.session.tipo_descricao  = pessoas.tipo_descricao;
                    console.log("Usuário " + pessoas.login + " acabou de conectar como " + pessoas.tipo_descricao + "!"); 
                    
                    return res.status(200).json({"data": {"codigo": 200, pessoas }});
                }
            }
            else{
                var mensagem = "Usuário " + req.body.login + " não encontrado!";
                console.log(mensagem);
                return res.status(404).json({"data": {"codigo": 404, "mensagem": mensagem }});
            }
        });
    },

    //################ Pessoa ##################################################
    async getPessoa(req, res) {
        console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date());
        if (req.session.login == undefined) {
            return res.status(401).json({"data": {"codigo": 401, "mensagem": "efetue o login para acessar a funcionalidade" }});
        }
        else if (req.session.tipo >= 0) {
            const pessoas = await Pessoa.find();
            return res.status(200).json({"data": {"codigo": 200, pessoas }});
        }
        else{
            return res.status(403).json({"data": {"codigo": 403, "mensagem": "Acesso não autorizado a essa a funcionalidade" }});
        }
    },
    async getPessoaById(req, res) {
        console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date());
        if (req.session.login == undefined) {
            return res.status(401).json({"data": {"codigo": 401, "mensagem": "Efetue o login para acessar a funcionalidade" }});
        }
        else if (req.session.tipo >= 0) {
            const { id }  = req.params;
            const pessoas = await Pessoa.findById(id)
            console.log("ID: " + id);
            if(pessoas)
                return res.status(200).json({ "data": { "codigo": 200, pessoas } });
            else
                var mensagem = "Pessoa " + req.body.login + " não encontrada!";
                console.log(mensagem);
                return res.status(404).json({"data": {"codigo": 404, "mensagem": mensagem }});
            }
        else{
            return res.status(403).json({"data": {"codigo": 403, "mensagem": "Acesso não autorizado a essa a funcionalidade" }});
        }
    },
    async postPessoa(req, res){
        console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date());
        var {login, senha, nome, curso, periodo, email, tipo} = req.body;

        if(tipo == 'A' ){
            tipo = 2;
        }
        else if(tipo == 'M'){
            tipo = 1;
        }
        else{
            tipo = 0;
        }
        
        var tipo_descricao;
        var ocultado = false;

        if(tipo == 0 ){
            tipo_descricao = "Administrador";
        }
        else if(tipo == 1){
            tipo_descricao = "Monitor";
        }
        else{
            tipo_descricao = "Aluno";
        }

        const pessoas = new Pessoa({login, senha, nome, curso, periodo, email, tipo, tipo_descricao, ocultado});
        await pessoas.save().then((pessoas) => {
            console.log(login + " foi criado com sucesso");
            return res.status(200).json({"data": {"codigo": 200, pessoas }});
        });
    },
    async putPessoa(req, res) {
        console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date());
        if (req.session.login == undefined) {
            return res.status(401).json({"data": {"codigo": 401, "mensagem": "efetue o login para acessar a funcionalidade" }});
        }
        else if (req.session.tipo >= 0) {
            await Pessoa.findOneAndUpdate({ _id: { $in: req.params.id } }, req.body).then((pessoas) => {
                return res.status(200).json({ "data": { "codigo": 200, pessoas } });
            });
        }
        else{
            return res.status(403).json({"data": {"codigo": 403, "mensagem": "Acesso não autorizado a essa a funcionalidade" }});
        }
    },
    async deletePessoa(req, res) {
        console.log('Url: ' + req.url + ' - Método: ' + req.method + ' - Data: ' + new Date());
        if (req.session.login == undefined) {
            return res.status(401).json({"data": {"codigo": 401, "mensagem": "efetue o login para acessar a funcionalidade" }});
        }
        else if (req.session.tipo >= 0) {
            await Pessoa.findOneAndRemove({ _id: { $in: req.params.id } }).then((pessoas) => {
                return res.status(200).json({ "data": { "codigo": 200, pessoas } });
            });
        }
        else{
            return res.status(403).json({"data": {"codigo": 403, "mensagem": "Acesso não autorizado a essa a funcionalidade" }});
        }
    }
}