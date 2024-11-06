const express = require("express");
const router = express.Router();
const { submitName } = require("../controllers/nameController");
const { getBMI } = require("../controllers/bmiController"); 

router.post("/submit", submitName);

router.post("/bmi", getBMI);

module.exports = router;