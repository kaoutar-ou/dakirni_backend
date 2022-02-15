const express = require("express");
const cors = require("cors");
const {
    setSafeZone,
    getSafeZone,
    getsafezoneAndroid
} = require("../controllers/SafeZoneController.js");

const router = express.Router();
router.post("/setsafezone", setSafeZone);
router.post("/getsafezone", getSafeZone);
router.get("/getsafezoneAndroid/:fatherKey",cors(),getsafezoneAndroid);

module.exports = router;
