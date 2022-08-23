const router = require('express').Router()

// Declare routes that people can visit on the application.
router.get('/:coffee', function (req, res) {
    let myCoffee = req.params.color
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
            <a class="navbar-brand" href="#">Home</a>
            <a class="navbar-brand" href="#">Places</a>

    
          </div>
          <ul class="nav navbar-nav">
            <li><a href="new_signup.html">New Places</a></li>
          </ul>
        </nav>
    
        <div class="container">
          <div class="jumbortron">
            <h1>Coffee Lover Project</h1>
            <p>At Indigo Coffee, we love everything about delicious office coffee, including fun quotes about our favorite beverage. When it comes to fueling our day at the office, we depend on coffee to perk us up and keep us motivated. On top of that, there’s nothing like a hot cup of your favorite java to put a smile on your face and inspire you to get creative.</p>
          </div>

          <div class="container">
        <h2>Pictures of Coffee</h2>
        
      </div>
    
        </div>
      </body>
    </html>
    
    `)
})


router.get('/Home', function (req, res) {
    res.send(`
        Welcome to my Home Page
    `)
})

module.exports = router