const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({   //GEOLOCATION API benutzen
    type: { type: String },
    coordinates: [Number]
 })

const LocationModel = mongoose.model("location", locationSchema);

module.exports = LocationModel;

// https://stackoverflow.com/questions/57178468/save-user-location-to-mongodb-nodejs-server
// https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/