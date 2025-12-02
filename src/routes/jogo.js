var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController.js")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/gwent", function (req, res) {
    jogoController.cadastrarGwent(req, res);
})

router.get("/rankGeral", function (req, res) {
    jogoController.buscarRankGeral(req, res);
})

router.get("/rankUsuario:idUsuarioLogado", function (req, res) {
    jogoController.buscarRankUsuario(req, res);
})


module.exports = router;