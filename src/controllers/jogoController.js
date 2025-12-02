var jogoModel = require("../models/jogoModel");

function cadastrarGwent(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var vencedor = req.body.vencedorServer;
  var vidasJogador = req.body.vidasJogadorFinalServer;
  var vidasAdversario = req.body.vidasAdversarioFinalServer;


  if (vencedor == undefined) {
    return res.status(400).send("Sua vencedor está undefined!");
  }
  if (vidasJogador == undefined) {
    return res.status(400).send("Seu vidasJogador undefined!");
  }
  if (vidasAdversario == undefined) {
    return res.status(400).send("Seu vidasAdversario está undefined!"); 
  }


  jogoModel.cadastrarGwent(vencedor, vidasJogador, vidasAdversario, idUsuario)
    .then(function (resultado) {
      console.log("Estou no THEN do cadastrarGwent");
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}


function buscarRankGeral(req, res) {




    jogoModel.buscarRankGeral().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas buscarRankGeral", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarRankUsuario(req, res) {
var idUsuarioLogado = req.params.idUsuarioLogado;



    jogoModel.buscarRankUsuario(idUsuarioLogado).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar  o ranking desse usuario", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrarGwent,
  buscarRankGeral,
  buscarRankUsuario
};
