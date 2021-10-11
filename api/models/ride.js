const mongoose = require('mongoose');

const rideSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId, //not required FOR NOW (6/6/20) because guest users should be able to post rides
    startDateTime: { type: String, required: true},
    path: { type: String, required: true}
    //settings: [String]
});

module.exports = mongoose.model('ride', rideSchema);
