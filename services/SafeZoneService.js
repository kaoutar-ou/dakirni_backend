const safeZoneModel = require("../models/SafeZone.js");

const setSafeZone = async (req, res) => {
    var response = {
      data: {},
    };
    console.log("set safe zone");
    // console.log(req);
    var safeZone = req.body.safezone;
    // console.log("req : " + req.body);
    
    // console.log("req.body");
    // console.log(req.body);
    // console.log("safeZone");
    // console.log(safeZone);
    //
    // console.log("safeZone.green.lat");
    // console.log(safeZone.green.lat);
    console.log("afin",safeZone.fatherKey);
    // console.log("req 2 : "+JSON.stringify(req.body));
    if (safeZone != null) {
      try {
        var green = new safeZoneModel({
            safezone_type: "green",
            safezone_lat: safeZone.green.lat,
            safezone_lng: safeZone.green.lng,
        });

        var yellow = new safeZoneModel({
            safezone_type: "yellow",
            safezone_lat: safeZone.yellow.lat,
            safezone_lng: safeZone.yellow.lng,
        });

        var red = new safeZoneModel({
            safezone_type: "red",
            safezone_lat: safeZone.red.lat,
            safezone_lng: safeZone.red.lng,
        });

        await safeZoneModel.deleteOne({ safezone_type : "green" });
        await safeZoneModel.deleteOne({ safezone_type : "yellow" });
        await safeZoneModel.deleteOne({ safezone_type : "red" });

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
  
    console.log("response");
    console.log(response);
    return response;
  };

  const getSafeZone = async (req, res) => {
    var response = {
      data: {},
    };
    
    let fatherKey = req.body.fatherKey;
    console.log("get safe zone");
      console.log("afin",fatherKey);

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