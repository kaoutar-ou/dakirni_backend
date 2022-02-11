const express = require("express");
const {
  setSafeZone,
  getSafeZone
} = require("../controllers/SafeZoneController.js");

const router = express.Router();
router.post("/setsafezone", setSafeZone);
router.get("/getsafezone", getSafeZone);

module.exports = router;
