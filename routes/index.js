const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get("/services", indexController.getAllServices);

module.exports = router;
