var quizModel = require("../models/quizModel");

function cadastrarQuest(req, res){
    var usuario = req.body.idUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;
    var acertos = req.body.percAcertosServer;
    var fkQuiz = req.body.quizServer;

    if (personagem == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (usuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    quizModel  
        .cadastrarQuest(pontuacao, acertos, usuario, fkQuiz)
        .then(function (resultado){
            console.log("Estou no THEN do cadastrarQuest");
            res.status(200).json(resultado);
        })
        .catch(function (erro){
            res.status(500).json(erro.sqlMessage);
        });
}





module.exports = {
    cadastrarQuest
};