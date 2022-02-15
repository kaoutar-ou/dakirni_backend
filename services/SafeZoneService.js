const safeZoneModel = require("../models/SafeZone.js");

const setSafeZone = async (req, res) => {
    var response = {
      data: {},
    };
    console.log("set safe zone");
    var safeZone = req.body.safezone;
    let fatherKey = safeZone.fatherKey;
    console.log("afin",fatherKey);
    // console.log("afin",fatherKey.fatherKey);
    if (safeZone != null) {
      try {
        var green = new safeZoneModel({
            safezone_type: "green",
            safezone_lat: safeZone.green.lat,
            safezone_lng: safeZone.green.lng,
            fatherKey
        });

        var yellow = new safeZoneModel({
            safezone_type: "yellow",
            safezone_lat: safeZone.yellow.lat,
            safezone_lng: safeZone.yellow.lng,
            fatherKey
        });

        var red = new safeZoneModel({
            safezone_type: "red",
            safezone_lat: safeZone.red.lat,
            safezone_lng: safeZone.red.lng,
            fatherKey
        });

        await safeZoneModel.deleteOne({ safezone_type : "green", fatherKey : fatherKey });
        await safeZoneModel.deleteOne({ safezone_type : "yellow", fatherKey : fatherKey });
        await safeZoneModel.deleteOne({ safezone_type : "red", fatherKey : fatherKey });

        if (green.save() && yellow.save() && red.save()) {
          response = {
            ...response,
            data: {
              ...response.data,
              success: "Safe Zone added successfully !",
            },
          };
        } else {
          response = {
            ...response,
            errMsgs: {
              ...response.errMsgs,
              err: "Error : Database Error !",
            },
          };
        }

      } catch (err) {
        // console.log(err);
        response = {
          ...response,
          errMsgs: {
            ...response.errMsgs,
            err: "Error : Server Error !",
          },
        };
      }
    } else {
      // console.log(err);
      response = {
        ...response,
        errMsgs: {
          ...response.errMsgs,
          err: "Error : Undefined Safe Zone !",
        },
      };
    }
  
    // console.log("response");
    // console.log(response);
    return response;
  };

  const getSafeZone = async (req, res) => {
    var response = {
      data: {},
    };
    
    let fatherKey = req.body.fatherKey;
    // console.log("req.body", req);
    // console.log("get safe zone");
    //   console.log("afin",req.body);

    const green = await safeZoneModel.findOne({'safezone_type': "green", "fatherKey": fatherKey});
    const yellow = await safeZoneModel.findOne({'safezone_type': "yellow", "fatherKey": fatherKey});
    const red = await safeZoneModel.findOne({'safezone_type': "red", "fatherKey": fatherKey});

    response = {
        green,
        yellow,
        red
    };

    return response;
  };

  module.exports = {setSafeZone, getSafeZone};