var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController.js")

router.post("/kpiVitalidade", function (req, res) {
    dashController.kpiVitalidade(req, res);
})


    module.exports = router;