const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true}))

app.set('views', path.resolve(__dirname, 'src', 'views'))

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', './layouts/default')

app.use(routes)

// STATICOS
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))




app.listen(port, () => console.info(`Rodando em http://localhost:${port}`))