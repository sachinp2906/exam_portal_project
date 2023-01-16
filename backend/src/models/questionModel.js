const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    Question : {
        type : String,
        required : true,
        unique : true
    },
    Option : {
        type : [String],
        default : ["a" , "b" , "c" , "d"]
    },
    Correct : {
        type : String,
        enum : ["a" , "b" , "c" , "d"]
    },
    Subject : {
        type : String,
        enum : ["Maths" , "Physics" , "Chemistry" , "Biology" , "Accounts" , "Economics" ,"Business" , "Ethics" , "Information Practice"]
    }
}, {timsstamps : true})

module.exports = mongoose.model('question' , questionSchema)