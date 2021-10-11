const express = require('express');
const router = express.Router();
const ridesController = require('../controllers/rides');
const checkAuth = require('../middleware/check-auth');

//router.get('/', checkAuth, pagesController.pages_get_all);

router.post('/', checkAuth, ridesController.rides_post_ride);

router.get('/:rideId', checkAuth, ridesController.rides_get_ride);

router.delete('/:rideId', checkAuth, ridesController.rides_delete_ride);

module.exports = router;
