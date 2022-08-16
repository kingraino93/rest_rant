// Require needed modules
require('dotenv').config()

const express = require ('express')
const app = express()

app.get ('/search', function (req, res) {
    console.log("QUERY PARAMS", req.query)
    res.send('RestaurantPage')
})

app.get ('/', function (req, res) {
    console.log(req.query)
    res.send('Hello World')
})

app.listen(process.env.PORT, function () {
    console.log("we are alive!!! http://localhost:3000")
})