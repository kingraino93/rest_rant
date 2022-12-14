const React = require('react')

function Default(html) {
    return (
        <html>
            <head>
                <title>Default</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/main.css" />
            </head>
            <body>
                <nav class="navbar navbar-inverse">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Welcome</a>

                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="new_signup.html">Home</a></li>
                        <li><a href="location">Places</a></li>
                        <li><a href="form">New Place</a></li>
                    </ul>
                </nav>
                <div className="wrapper">
                    <header>
                        <h1><a href="/breads">SailorCOFFEE</a></h1>
                    </header>
                    <div className="container">
                        {html.children}
                    </div>
                    <div><img src="https://easyhomecoffee.com/ezoimgfmt/727464-2427128-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/adjusting-manual-coffee-grinder-950px.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1" alt="" /></div>
                </div>
            </body>
        </html>
    )
}

module.exports = Default