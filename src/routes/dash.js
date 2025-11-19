var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController.js")

router.post("/kpiVitalidade", function (req, res) {
    dashController.kpiVitalidade(req, res);
})

router.post("/nomeTitulo", function (req, res) {
    dashController.nomeTitulo(req, res);
})

router.post("/kpiCombate", function (req, res) {
    dashController.kpiCombate(req, res);
})

router.post("/kpiConhecimento", function (req, res) {
    dashController.kpiConhecimento(req, res);
})

router.post("/kpiInfluencia", function (req, res) {
    dashController.kpiInfluencia(req, res);
})

router.post("/kpiDiscricao", function (req, res) {
    dashController.kpiDiscricao(req, res);
})

router.post("/imgClasseUsuario", function (req, res) {
    dashController.imgClasseUsuario(req, res);
})

router.post("/sobreClasse", function (req, res) {
    dashController.sobreClasse(req, res);
})



    module.exports = router;