const express = require('express')
const coffee = express.Router()
const Coffee = require('../models/coffee.js')

// INDEX
coffee.get('/', (req, res) => {
  res.render('Index',
    {
      coffee: Coffee
    }
  )
// res.send(Coffee)
})


// SHOW
coffee.get('/:arrayIndex', (req, res) => {
  res.send(Coffee[req.params.arrayIndex])
})


module.exports = coffee
