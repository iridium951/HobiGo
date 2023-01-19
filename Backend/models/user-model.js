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
    Interests:
        [{ type: String }],
    /*  Location: {
        type: LocationModel
        }, */
    token:
        [{ type: String }]
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;