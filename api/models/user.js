const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique:true},
    //bio: String,
    email: {type: String, 
        required: true, 
        unique: true,//'unique' optimizes query performance by knowing there will only be one of these values
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }, 
    password: {type: String, required: true}, //probably replace this via sign in with eth signature
    active: Boolean,
    content_owned: [{type: mongoose.Schema.Types.ObjectId, ref: 'nft'}],
    content_created: [{type: mongoose.Schema.Types.ObjectId, ref: 'nft'}]
    //rides: [{type: mongoose.Schema.Types.ObjectId, ref: 'rides'}]
});// <-- after the curly brace, consider adding , {timestamps:true} 
//CONSIDER ADDING REQUIREMENTS (to the values) SUCH AS: trim, max, lowercase, etc...

module.exports = mongoose.model('user', userSchema);