const express = require("express");
const { createTour } = require("./../controllers/tourController");

const router = express.Router();

router.route("/").post(createTour);

module.exports = router;
