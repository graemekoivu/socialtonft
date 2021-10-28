const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//app.locals.baseURL = "https://localhost:3443/";

const userRoutes = require('./api/routes/users');
const nftRoutes = require('./api/routes/nfts');
const displayRoutes = require('./api/routes/display');

require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //probably just replace with app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json()); //and here too same as above

mongoose.connect('mongodb://localhost:27017/test');
//app.set('view engine', 'ejs');
//app.set('view engine', 'html');

// Routes which should handle requests... These are middlewares:
app.use('/users', userRoutes);
app.use('/nfts', nftRoutes);
app.use('/display', displayRoutes);

const path = require('path');
var public = path.join(__dirname, '/public/');
app.set('views', public);
/*app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
})*/

/*app.get('/', (req, res) => {
    res.render('index', {root: '.'});
});*/
/*app.get('/:code', (req, res) => {
    const code = req.params.code;
    console.log(code);
    res.status(200).json({
        message: "inside get ??"
    });
    //console.log(req.params.code);
    //res.sendFile('gramdisplay.html', { root: '.'});
});*/
app.use(express.static(__dirname + '/public/'));
/*app.param('code', (req, res, next, code) => {
    console.log('inside get code!');
    next()
})*/
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index'));

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