const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())


const clients = require('./controllers/clientscontroller')
const bd = require('./database/sqlite-db')



 app.use((req, res, next) =>{
   next()
 }) 

 

 clients(app, bd)


module.exports = app