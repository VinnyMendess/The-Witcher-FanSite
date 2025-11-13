var dashModel = require("../models/dashModel");

function kpiVitalidade(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.kpiVitalidade(idUsuario).then(function(resultado){
        //aqui precisa informar que o resultado vai voltar para o front em resposta JSON
        console.log("O controller recebeu o idUsuario", idUsuario)
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    kpiVitalidade
}