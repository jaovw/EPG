const express = require('express')
const route = express.Router()
const {getDataApi, getDadosApi} = require('./src/controllers/homeController')
const moment = require('moment')

// let horaMoment = moment().add(3,'hours').format('HH:MM:DD')
// let diaMoment = moment().format('YYYY-MM-DD')

//  ROTAS DA HOME.
route.get('/',async (req, res) =>{

    let data = new Date().getTime()
    let dataAbreviada = Math.floor(data / 1000)

    const dataParametro = new Date().toLocaleDateString()
    const [dia,mes,ano] = dataParametro.split('/')

    const diaParametro = `${ano}-${mes}-${dia}`

    const resultadoGetData = await getDataApi(diaParametro)    
    const resultadoGetDados = await getDadosApi(diaParametro, dataAbreviada)

    let programacaoAtual = []
    for(dado of resultadoGetDados){ 

        if(dado.end_time > dataAbreviada && dado.start_time <= dataAbreviada){

            dado.title === null ? programacaoAtual.push(dado.description): programacaoAtual.push(dado.title)

        }else {
            'Algo deu errado'
        }
    }
    // console.log('DIA >>',diaMoment,' HORA >>', horaMoment)
    // console.log('novo: ',data, dataAbreviada)
    // console.log(dataParametro,dataAbreviada)
    // console.log(diaParametro)

    
    res.render('index',{ api:resultadoGetDados, data:resultadoGetData, programacaoAtual, title: 'EPG'})
})

module.exports = route