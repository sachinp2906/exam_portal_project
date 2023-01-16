const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes/route')

app.use(express.json())

mongoose.connect('mongodb+srv://sachinfu:2906@sachinfu.fcpe6tc.mongodb.net/exam-portal-db' , {
    useNewUrlParser : true
})
.then(() => console.log('connected with db'))
.catch(err => err.message)

app.use('/' , routes)

const PORT = 3000
app.listen(PORT, function() {
    console.log("express app running on port " + PORT )
})

