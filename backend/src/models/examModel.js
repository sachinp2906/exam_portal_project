const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const examSchema = new mongoose.Schema({
    Student : {
        type : ObjectId,
        ref : 'student'
    },
    Questions : {
        type : []
    },
    Answers : {
        type : [],
        required : true
    },
    StudentAnswer : {
        type : [],
        default : []
    }
})