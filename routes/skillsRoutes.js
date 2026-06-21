const express = require("express");
const router = express.Router();
const skillsController = require("../controllers/skillsController");

router.get("/", skillsController.index);

module.exports = router;

