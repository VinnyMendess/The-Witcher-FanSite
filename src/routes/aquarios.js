var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/:idUsuario", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/idUsuario", function (req, res) {
  aquarioController.cadastrar(req, res);
})

module.exports = router;