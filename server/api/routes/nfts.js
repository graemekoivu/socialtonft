//SHOULD THERE EVEN BE ROUTE JUST TO NFT??

const express = require('express');
const router = express.Router();
const nftsController = require('../controllers/nfts');
const checkAuth = require('../middleware/check-auth');

//router.get('/', checkAuth, pagesController.pages_get_all);

router.post('/', nftsController.nfts_post_nft);//, checkAuth OBVIOUSLY (especially bcuz updates (patches) user)

router.get('/:nftId', checkAuth, nftsController.nfts_get_nft);

//router.delete('/:rideId', checkAuth, ridesController.rides_delete_ride);

module.exports = router;
