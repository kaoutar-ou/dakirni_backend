const SafeZoneService = require("../services/SafeZoneService.js");

const setSafeZone = async (req, res) => {
  const response = await SafeZoneService.setSafeZone(req, res);
  if (response?.errMsgs) return res.status(500).json(response);
  else return res.status(200).json(response);
};

const getSafeZone = async (req, res) => {
    const response = await SafeZoneService.getSafeZone(req, res);
    if (response?.errMsgs) return res.status(500).json(response);
    else return res.status(200).json(response);
  };

module.exports = { setSafeZone, getSafeZone };