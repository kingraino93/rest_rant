// Require needed modules
require('dotenv').config()

const express = require('express')
const app = express()

app.use('/coffee', require('./controllers/controller_cofee'))
app.use('/user', require('./controllers/user'))

app.listen(process.env.PORT, function () {
    console.log("we are alive!!! http://localhost:3000")
})