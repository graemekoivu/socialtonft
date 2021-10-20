const mongoose = require('mongoose');

/*const rideSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId, //not required FOR NOW (6/6/20) because guest users should be able to post rides
    startDateTime: { type: String, required: true},
    path: { type: String, required: true}
    //settings: [String]
});*/

//should probably get data from the blockchain?
const nftSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    makerId: { type: String, required: true},//{ type: mongoose.Schema.Types.ObjectId, required: true},
    ownerId: { type: String, required: true},//{ type: mongoose.Schema.Types.ObjectId, required: true},
    bid: String, //...in ETH
    ask: String, //...in ETH
    //onSale: { type: Boolean, required: true},
    src: { type: String, required: true},
    //auctionTime? onSale?
    //startDateTime: { type: String, required: true},
    //path: { type: String, required: true}
    //settings: [String]
});

module.exports = mongoose.model('nft', nftSchema);
