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
    Image: {                    // hier gerade nur 1 Bild
        data: Buffer,           // Base64 encode nötig für Bild Dateien
        contentType: String
    },
    User: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }]  // Event muss zum bestimmten Veranstalter gehören
    ,
    ParticipantID: 
    [{ type : Number }]  
           // Hier werden die Teilnehmer gespeichert
});

const EventModel = mongoose.model("events", eventSchema);

module.exports = EventModel;

//https://stackoverflow.com/questions/43265409/mongoose-how-to-get-user-id-from-session-in-order-to-post-data-including-this
//https://stackoverflow.com/questions/4796914/store-images-in-a-mongodb-database
//https://stackoverflow.com/questions/69359388/how-to-store-an-image-in-mongodb
//https://stackoverflow.com/questions/22172604/convert-image-from-url-to-base64/22172860#22172860