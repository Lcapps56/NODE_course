const express = require('express')

const router = express.Router()

const users = []


router.get('/', (req, res, next) => {
    res.render('index', {docTitle: 'Home'})
})

router.get('/users', (req, res, next) => {
    res.render('users', {
        docTitle: 'Users', 
        users: users, 
        hasUsers: users.length > 0
    })
})

router.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username})
    res.redirect('/users')
})


module.exports = router