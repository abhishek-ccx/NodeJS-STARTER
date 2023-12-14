const express = require("express");
const { getUserByName } = require("./../controllers/name/nameController");
const {
  getUserByDesignation,
} = require("./../controllers/designation/designationController");

const router = express.Router();

router.route("/userbyname").get(getUserByName);
router.route("/userbydesignation").get(getUserByDesignation);

module.exports = router;
