const mongoose = require("mongoose");

const safeZoneSchema = mongoose.Schema(
  {
    safezone_type: {
      type: String,
      required: true,
    },
    safezone_lat: {
      type: Array,
      required: true,
    },
    safezone_lng: {
      type: Array,
      required: false,
    },
    fatherKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const safeZone = mongoose.model("safezones", safeZoneSchema);

module.exports = safeZone;
