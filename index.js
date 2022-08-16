// Require needed modules
require('dotenv').config()

const express = require('express')
const app = express()

// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
      </head>
      <body>
    
        <nav class="navbar navbar-inverse">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Welcome</a>
    
          </div>
          <ul class="nav navbar-nav">
            <li><a href="new_signup.html">Sign In</a></li>
          </ul>
        </nav>
    
        <div class="container">
          <div class="jumbortron">
            <h1>Coffee Lover Project</h1>
            <p>At Indigo Coffee, we love everything about delicious office coffee, including fun quotes about our favorite beverage. When it comes to fueling our day at the office, we depend on coffee to perk us up and keep us motivated. On top of that, there’s nothing like a hot cup of your favorite java to put a smile on your face and inspire you to get creative.</p>
          </div>

          <div class="container">
        <h2>Pictures of Coffee</h2>
        <div class="row">
          <div class="col-lg-4 col-xs-6 thumbnail"><img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""></div>
          <div class="col-lg-4 col-xs-6 thumbnail"><img src="https://images.unsplash.com/photo-1566929250751-b500dbb09b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""></div>
          <div class="col-lg-4 col-xs-6 thumbnail"><img src="https://images.unsplash.com/photo-1544047963-0cfb7692fd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""></div>
          <div class="col-lg-4 col-xs-6 thumbnail"><img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""></div>
          <div class="col-lg-4 col-xs-6 thumbnail"><img src="https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""></div>
          <div class="col-lg-4 col-xs-6 thumbnail"><img src="https://images.unsplash.com/photo-1611689245341-399d7c35e401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""></div>


      </div>
    
        </div>
      </body>
    </html>
    
    `)
})


app.get('/', function (req, res) {
    console.log(req.query)
    res.send('Hello World')
})

app.listen(process.env.PORT, function () {
    console.log("we are alive!!! http://localhost:3000")
})