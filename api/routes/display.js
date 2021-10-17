const express = require('express');
const router = express.Router();
const displayController = require('../controllers/display');

router.get('/', displayController.get_display);/*(req, res, next) => {
    
    res.sendFile('gramdisplay.html', { root: '.'});
    //res.render('test', {msg: req.params.code});
    console.log('here');
    //const code = req.params.code;
    //console.log(code);


})*/

module.exports = router;