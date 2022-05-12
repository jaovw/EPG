const express = require('express')
const route = express.Router()
const {getDados, getHora} = require('./src/controllers/homeController')
const moment = require('moment')

// const horaMoment = moment().add(3,'hours').format('HH:MM:DD')
// const diaAtual = moment().format('YYYY-MM-DD')

//  ROTAS DA HOME.
route.get('/',async (req, res) =>{


    const data = new Date().toLocaleString('en-US', { hour12: false, timeZone: 'UTC' })
    const diaAtual = new Date().toISOString().split('T')[0]
    const[a, horaAtual] = data.split(' ')
    

    const d = await getDados(diaAtual)    
    const t = await getHora(diaAtual, horaAtual)

    let programacaoAtual = []
    for(dado of t){ 

        if(dado.human_end_time > horaAtual && dado.human_start_time <= horaAtual){

            dado.title === null ? programacaoAtual.push(dado.description): programacaoAtual.push(dado.title)

        }else {
            'Algo deu errado'
        }
    }
    // console.log(diaAtual, horaAtual)
    // console.log('moment: ',horaMoment)
    // console.log(diaAtual)

    
    res.render('index',{ api:d, horas: t ,programacaoAtual, title: 'EPG'})
})

module.exports = route