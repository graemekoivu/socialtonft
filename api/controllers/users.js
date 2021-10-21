const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mailgun = require("mailgun-js");
const DOMAIN = "sandbox5948218128314793830cf80b38b8d2f9.mailgun.org";
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});

const User = require('../models/user');

exports.users_get_all = (req, res, next) => {
    User.find()
    .select('_id username content_owned content_sold')//bio email
    .exec()
    .then( docs => {
        const response = {
            count: docs.length,
            users: docs.map(doc => {
                return {
                    _id: doc._id,
                    username: doc.username,
                    //bio: doc.bio,
                    //email: doc.email,
                    content_owned: doc.content_owned,
                    content_sold: doc.content_sold,
                    request: {
                        type: 'GET, PATCH, DELETE',
                        url: 'http://localhost:3000/users' + doc._id
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
};

exports.users_signup = (req, res, next) => {
    User.find({ $or: [{email: req.body.email}, {username: req.body.username}]})
    .exec()
    .then(user => {
        if (user.length >= 1) {
            User.find({email: req.body.email})  //This is probably a dumb cheat to check if the email or username is taken
            .then(user_x => {
                if (user_x.length >= 1) {
                    return res.status(409).json({
                        message: "Email is taken."
                    })
                } else {
                    return res.status(409).json({
                        message: "Account already in use." //"Username is taken."
                    })
                };
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const userId = new mongoose.Types.ObjectId()
                    const token = jwt.sign({
                        email: req.body.email,
                        userId: userId
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn: "24h"})

                    const data = {
                        from: 'noreply@instagramtonft.com', //.io ?
                        to: req.body.email,
                        subject: 'New Account Verification',
                        text: `Thank you for your involvement with InstaToNFT. Please visit this link to activate your account: https://localhost:3443/users/activate_account/?token=${token}` //previously (for use w android app) "http://10.0.2.2:3000/..."
                    };
                    mg.messages().send(data, function (error, body) {
                        if (error) {
                            return res.status(500).json({ //!!!this can cause an error (sending multiple responses) if it occurs!!!
                                error: error
                            })
                        }
                        //return res.status(201).json({
                        //    message: "Verification email has been sent."
                        //})
                    });
                        
                    const user = new User({
                        _id: userId, //new mongoose.Types.ObjectId(),
                        username: req.body.username,
                        //bio: req.body.bio,
                        email: req.body.email,
                        password: hash,
                        //content_owned: ... should immediately be the minted nfts
                        active: false //TODO: 1) handle the case for the email getting lost so another can be sent
                                      // 2) delete user from db if active is still false after 24hrs
                    });
                    user.save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "User saved... Awaiting verification."//,
                            //createdUser: result
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });
        }
    });
};

exports.users_activate_account = (req, res, next) => {
    const token = req.query.token;
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, function(err, decodedToken) {
            if (err) {
                return res.status(400).json({error: "Account activation failed. Link may be expired"});
            }
            const {userId, email} = decodedToken;
            User.updateOne({_id: userId}, { $set: {active: true}})
            .exec()
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });
        })
    } else {
        return res.status(400).json({error: "Something went wrong. Verification token not received"});
    }


    /*User.find({ $or: [{email: req.body.email}, {username: req.body.username}]})
    .exec()
    .then(user => {
        if (user.length >= 1) {
            User.find({email: req.body.email})  //This is probably a dumb cheat to check if the email or username is taken
            .then(user_x => {
                if (user_x.length >= 1) {
                    return res.status(409).json({
                        message: "Email is taken."
                    })
                } else {
                    return res.status(409).json({
                        message: "Username is taken."
                    })
                };
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        username: req.body.username,
                        bio: req.body.bio,
                        email: req.body.email,
                        password: hash,
                    });
                    user.save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "User created."//,
                            //createdUser: result
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });
        }
    });*/
};

exports.users_get_user = (req, res, next) => {
    const id = req.params.userId;
    User.findOne({"username": id})//used to be User.findById but not sure why ?? (21/10/21) -actually that might make more sense??
    .select('_id username content_owned content_created')//bio email')//rides
    .populate('content_owned', 'src')
    .populate('content_created', 'src')
    .exec()
    .then(doc => {
        if (doc) {
        const response = {
            _id: doc._id,
            username: doc.username,
            //bio: doc.bio,
            content_owned: doc.content_owned,
            content_created: doc.content_created,
            email: doc.email,
            //rides: doc.rides,
            //account_creation: doc._id.getTimestamp(),
            /*birthday: doc.birthday,
            content: doc.content,
            subscribedToPages: doc.subscribedToPages,
            subscribedToUsers: doc.subscribedToUsers,
            subscribedByUsers: doc.subscribedByUsers,
            cachedContent: doc.cachedContent,*/
            request: {
                type: 'GET, PATCH, DELETE', //POST? prolly not
                url: 'http://localhost:3000/users/' + doc._id
            }
        }
        console.log(doc);
        res.render('userpage', {username: doc.username, content_owned: doc.content_owned, content_sold: doc.content_sold});
        //res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
};

exports.users_patch_user = (req, res, next) => {
    const id = req.params.userId
    const updateOps = {};
    for (const ops of req.body) { //now we want request body to be in form: [{"propName": "xyz_name", "value": "abc_value"}]
        updateOps[ops.propName] = ops.value //...make sure to restrict user to only update certain properties (i.e. bio, username?)
    }
    User.update({_id: id}, { $set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

//SHOULD MAYBE BE LOGIN WITH ETH SIGNATURE??
exports.users_login = (req, res, next) => {
    User.find({email: req.body.email})//could(should) use findOne
    .select('active password username')
    //.populate('active')
    .exec()
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: "Authorization failed.0",
                length: user.length
            })
        } else if (!user[0].active){//}.active) {
            console.log(user[0].active)
            return res.status(401).json({
                message: "Account hasn't been activated."
            })
        }
        console.log(user[0].active)
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "Authorization failed.1"
                })
            }
            if (result) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn: "7d"
                    }
                );
                return res.status(200).json({
                    message: "Authorization successful.",
                    token: token,
                    username: user[0].username
                })
            };
            res.status(401).json({
                message: "Authorization failed.2"
            });
        });
    })
    .catch(err => {
        console.log(err),
        res.status(500).json({
            error: err
        });
    });
};

exports.users_delete_user = (req, res, next) => {
    const id = req.params.userId;
    User.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "User deleted."
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};
