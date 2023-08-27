var express = require("express");
const { getData } = require("../controllers/data");
var router = express.Router();

/* GET users listing. */
router.get("/", getData);

module.exports = router;
