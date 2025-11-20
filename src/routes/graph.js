var express = require("express");
var router = express.Router();

var graphController = require("../controllers/graphController");

router.get("/grafico1/:idUsuarioLogado", function (req, res) {
    graphController.buscarUltimasPorcentagem(req, res);
});



module.exports = router;