const router = require('express').Router()

router.get('/Login', function (req, res) {
    res.send(`
        Welcome to my Login Page
    `)
})

module.exports = router