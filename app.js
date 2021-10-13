const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');
const nftRoutes = require('./api/routes/nfts');

require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //probably just replace with app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json()); //and here too same as above

mongoose.connect('mongodb://localhost:27017/test');

// Routes which should handle requests... These are middlewares:
app.use('/users', userRoutes);
app.use('/nfts', nftRoutes);

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: '.' });
});

// This, too, is middleware
app.use((req, res, next) => {
    const error = new Error('Not Found.');
    error.status = 404;
    next(error); //forwards the error request
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;