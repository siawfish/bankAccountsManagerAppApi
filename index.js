const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const accRoutes = require('./routes/account')
const bankRoutes = require('./routes/bank')

//Create express server
const server = express()

server.use(bodyParser.json())

//Routes
server.use(accRoutes)
server.use(bankRoutes)

mongoose.connect('mongodb+srv://me:Rolodex@cluster0.z5tx2.mongodb.net/Codetrain?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } ) ?
server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready')) : console.log("Database connection failed")