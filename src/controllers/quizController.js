var quizModel = require("../models/quizModel");

function cadastrarQuest(req, res) {
  var usuario = req.body.idUsuarioServer;
  var pontuacao = req.body.pontuacaoServer;
  var acertos = req.body.percAcertosServer;
  var fkQuiz = req.body.quizServer;

  if (pontuacao == undefined) {
    return res.status(400).send("Sua pontuação está undefined!");
  }
  if (usuario == undefined) {
    return res.status(400).send("Seu usuario undefined!");
  }
  if (acertos == undefined) {
    return res.status(400).send("Seu acerto está undefined!"); 
  }
  if (fkQuiz == undefined) {
    return res.status(400).send("Seu fkQuiz undefined!"); 
  }

  quizModel.cadastrarQuest(fkQuiz, usuario, acertos, pontuacao)
    .then(function (resultado) {
      console.log("Estou no THEN do cadastrarQuest");
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrarQuest,
};
