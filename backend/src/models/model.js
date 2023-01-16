const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    UniqueId : {
        type : String,
        required : true,
        unique : true 
    },
    Email : {
        type : String,
        required : true,
        unique :true
    },
    Password : {
        type : String, 
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model('student' , studentSchema)