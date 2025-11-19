var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController.js")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarQuest", function (req, res) {
    quizController.cadastrarQuest(req, res);
})



module.exports = router;