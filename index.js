const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Create express server
const server = express()

server.use(bodyParser.json())

mongoose.connect('mongodb+srv://me:Rolodex@cluster0.z5tx2.mongodb.net/Codetrain?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } ) ?
server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready')) : console.log("Database connection failed")