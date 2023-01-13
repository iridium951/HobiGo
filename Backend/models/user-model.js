const mongoose = require("mongoose");
//const LocationModel = require('./models/location-model.js');

const userSchema = new mongoose.Schema({
    EmailAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    Name: {
        type: String
    },
    Password: {
        type: String,
        required: true,
        minlength: 6
    },
    Interests:                  //hier noch unsicher, da man aus der Liste auswählt und nichts eingibt
    [{ type : String }],
/*     Location: {
        type: LocationModel
    }, */
    token :                     //zum Authentifizieren
        [{ type : String }]
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;