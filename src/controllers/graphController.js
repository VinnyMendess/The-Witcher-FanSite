var graphModel = require("../models/graphModel");

function buscarUltimasPorcentagem(req, res) {


    var idUsuarioLogado = req.params.idUsuarioLogado;

    graphModel.buscarUltimasPorcentagem(idUsuarioLogado).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarGraficoSinal(req, res) {




    graphModel.buscarGraficoSinal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas. do grafico", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasPorcentagem,
    buscarGraficoSinal,


}