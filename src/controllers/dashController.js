var dashModel = require("../models/dashModel");

function nomeTitulo(req, res) {
  var idUsuario = req.body.idUsuarioServer;
    dashModel
      .nomeTitulo(idUsuario)
      .then(function (resultado) {
        //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
        console.log("O controller recebeu o idUsuario", idUsuario);
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }

function kpiVitalidade(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .kpiVitalidade(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function kpiCombate(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .kpiCombate(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function kpiInfluencia(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .kpiInfluencia(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function kpiConhecimento(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .kpiConhecimento(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function kpiDiscricao(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .kpiDiscricao(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function imgClasseUsuario(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .imgClasseUsuario(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function sobreClasse(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  dashModel
    .sobreClasse(idUsuario)
    .then(function (resultado) {
      //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
      console.log("O controller recebeu o idUsuario", idUsuario);
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  kpiVitalidade,
  kpiCombate,
  kpiInfluencia,
  kpiConhecimento,
  kpiDiscricao,
  imgClasseUsuario,
  sobreClasse,
  nomeTitulo
};
