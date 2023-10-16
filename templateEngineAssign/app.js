// DEPENDENCIES
const express = require('express')
const app = express()
const routes = require('./routes/default')
const bodyParser = require('body-parser')

const expressHbs = require('express-handlebars')

// app.engine('hbs', expressHbs.engine({defaultLayout: 'main-layout', extname: 'hbs'}))
app.set('view engine', 'ejs')
app.set('views', 'views')

// MIDDLEWARE
app.use(bodyParser({extended: true}))

app.use(routes)

app.listen(3000)