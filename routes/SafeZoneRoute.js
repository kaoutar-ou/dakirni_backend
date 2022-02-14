const express = require("express");
const {
    setSafeZone,
    getSafeZone,
    getsafezoneAndroid
} = require("../controllers/SafeZoneController.js");

const router = express.Router();
router.post("/setsafezone", setSafeZone);
router.get("/getsafezone", getSafeZone);
router.get("/getsafezoneAndroid", getsafezoneAndroid);

module.exports = router;
