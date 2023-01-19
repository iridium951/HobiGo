const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({   //GEOLOCATION API benutzen
    type: { type: String },
    coordinates: [Number]
})

const LocationModel = mongoose.model("location", locationSchema);

module.exports = LocationModel;