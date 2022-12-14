// DEPENDENCIES
const express = require('express')
const methodOverride = require ('method-overrride')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Coffee')
  })
  
  // 404 Page
app.get('/', (req, res) => {
  res.send('404')
})

  // Coffee
  const coffeeController = require('./controllers/controller_coffee.js')
  app.use('/coffee', coffeeController)
  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
