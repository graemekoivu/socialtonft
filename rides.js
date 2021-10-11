const Ride = require('../models/ride');
const mongoose = require('mongoose');

/*exports.pages_get_all = (req, res, next) => {
    Ride.find()
    .select('_id userId startDateTime path')//pageName description source content members')
    .populate('members', 'username')
    .populate('source', 'username')
    .exec()
    .then( docs => {
        const response = {
            count: docs.length,
            pages: docs.map(doc => {
                return {
                    _id: doc._id,
                    pageName: doc.pageName,
                    description: doc.description,
                    source: doc.source,
                    content: doc.content,
                    members: doc.members,
                    request: {
                        type: 'GET, PATCH, DELETE',
                        url: 'http://localhost:3000/pages/' + doc._id
                    }
                }
            })
        }
        console.log(docs);
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};*/

exports.rides_post_ride = (req, res, next) => {
    const ride = new Ride({
        _id: new mongoose.Types.ObjectId(),
        userId: req.userData.userId, //changed to "userData" from "body" on 6/6/20 because decoded token holds this value (from check-auth.js)
        startDateTime: req.body.startDateTime,
        path: req.body.path
        //settings: [req.body.settings]
    });
    ride.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handled a POST request to /rides",
                createdPage: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.rides_get_ride = (req, res, next) => {
    const id = req.params.rideId;
    Ride.findById(id)
    .select('_id userId startDateTime path')//pageName description source members')
    .populate('userId', 'username')
    .exec()
    .then(doc => {
        if (doc) {
        const response = {
            _id: doc._id,
            userId: doc.userId,
            startDateTime: doc.startDateTime,
            path: doc.path,
            request: {
                type: 'GET, PATCH, DELETE', //POST? prolly not
                url: 'http://localhost:3000/rides/' + doc._id
            }
        }
        console.log(doc);
        res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Ride not found'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
};

exports.rides_delete_ride = (req, res, next) => {
    const id = req.params.rideId;
    Ride.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};