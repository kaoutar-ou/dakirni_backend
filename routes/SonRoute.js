const express = require("express");
const {
  allSons,
} = require("../controllers/SonController.js");

const router = express.Router();
router.get("/allsons", allSons);

module.exports = router;
