const express = require('express')
const coffee = express.Router()
const Coffee = require('./models/coffee.js')

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
      coffee:Coffee[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('404')
  }
})

// EDIT
coffee.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    coffee: Coffee[req.params.indexArray],
    index: req.params.indexArray
  })
})


// UPDATE
coffee.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Coffee[req.params.arrayIndex] = req.body
  res.redirect(`/coffee/${req.params.arrayIndex}`)
})


// DELETE
coffee.delete('/:indexArray', (req, res) => {
  Coffee.splice(req.params.indexArray, 1)
  res.status(303).redirect('/coffee')
})



module.exports = coffee
