const express = require('express')
const route = express.Router()
const {paginaInicial, post} = require('./src/controllers/homeController')
const {contato} = require('./src/controllers/contatoContoller')

//  ROTAS DA HOME.
route.get('/', (req, res) =>{
    res.render('index')
})

module.exports = route