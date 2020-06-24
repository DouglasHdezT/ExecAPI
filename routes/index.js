var express = require('express');
var router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get('/updateRepo', indexController.updateGet);
router.post('/updateRepo', indexController.updatePost);

module.exports = router;
