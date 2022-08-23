const React = require('react')

function Default(html) {
    return (
        <html>
            <head>
                <title>Default</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
            </head>
            <body>
                <nav class="navbar navbar-inverse">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Welcome</a>

                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="new_signup.html">Home</a></li>
                        <li><a href="new_signup.html">Places</a></li>
                        <li><a href="new_signup.html">New Place</a></li>
                    </ul>
                </nav>
                <div class="container"></div>
                <div class="jumbortron"></div>
                <div className="container">
                    {html.children}
                </div>

            </body>
        </html>
    )
}

module.exports = Default