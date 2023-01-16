const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    AdminName : {
        type : String,
        required : true
    },
    AdminKey : {
        type : String,
        required : true
    },
    AdminEmail : {
         type : String,
         required : true,
         unique : true
    },
    AdminPassword : {
        type : String,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model('admin' , adminSchema)