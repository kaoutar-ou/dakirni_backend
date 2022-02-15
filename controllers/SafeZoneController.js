const SafeZoneService = require("../services/SafeZoneService.js");
const safeZoneModel = require("../models/SafeZone");

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
const getsafezoneAndroid=async (req,res)=>{
    const response=await safeZoneModel.find({"fatherKey": req.params.fatherKey});
    console.log(response);
    res.send(response);
}
module.exports = { setSafeZone, getSafeZone,getsafezoneAndroid };