var express = require("express");
const { getData, updateData } = require("../controllers/data");
const updateDataValidator = require("../validators/updateDataValidator");
var router = express.Router();

/* GET users listing. */
router.get("/", getData);
router.put("/", updateDataValidator, updateData);

module.exports = router;
