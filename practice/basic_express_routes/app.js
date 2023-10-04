const express = require('express')
const path = require('path')
const app = express()

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

app.use(express.static(path.join(__dirname, 'publix')))

app.use('/', (req, res, next) => {
    res.send('<p> 404 page not found</p>')
})


app.listen(3000)