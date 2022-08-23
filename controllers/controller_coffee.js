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
  if (Coffee[req.params.arrayIndex]) {
    res.render('Show', {
      coffee:Coffee[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})



module.exports = coffee
