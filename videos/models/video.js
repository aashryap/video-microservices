var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
var mongooseHidden = require('mongoose-hidden')();
var timestamps = require('mongoose-timestamp');
var paginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    name : {
        type : String
    },
    category: {
        type: String,
    },
    url : {
        type : String
    }
},{usePushEach: true});
schema.plugin(paginate);
schema.plugin(timestamps);
// schema.plugin(mongooseHidden,{ hidden: {_id:false, password: true,scope:true,isActive:true,createdAt:true,updatedAt:true} });

module.exports = mongoose.model('video', schema);

