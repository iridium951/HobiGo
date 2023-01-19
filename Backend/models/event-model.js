const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    About: {
        type: String
    },
    Date: {
        type: Date,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    VisitorNumber: {
        type: Number,
        required: true
    },
    Image: {                                                            // hier gerade nur 1 Bild
        data: Buffer,                                                   // Base64 encode nötig für Bild Dateien
        contentType: String
    },
    User: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }]  // Event muss zum bestimmten Veranstalter gehören
    ,
    ParticipantID:
        [{ type: Number }]                                               // Hier werden die Teilnehmer gespeichert
});

const EventModel = mongoose.model("events", eventSchema);

module.exports = EventModel;