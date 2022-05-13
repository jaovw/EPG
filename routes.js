const express = require('express')
const route = express.Router()
const {getDataApi, getDadosApi} = require('./src/controllers/homeController')

//  ROTAS DA HOME.
route.get('/',async (req, res) =>{

    let dataAbreviada = Math.floor(new Date().getTime() / 1000)

    const dataParametro = new Date().toLocaleDateString()

    const [dia,mes,ano] = dataParametro.split('/')

    const diaParametro = `${ano}-${mes}-${dia}`

    const dataFront = new Date().toLocaleString('pt-br', { hour12: false, timeZone: 'UTC',dateStyle: 'short'})

    const resultadoGetData = await getDataApi(diaParametro)    
    const resultadoGetDados = await getDadosApi(diaParametro)

    let programacaoAtual = []
    for(dado of resultadoGetDados){ 

        if(dado.end_time > dataAbreviada && dado.start_time <= dataAbreviada){

            // dado.title === null ? programacaoAtual.push(dado.program.name): programacaoAtual.push(dado.title)
            programacaoAtual.push(dado.program.name)

        }else {
            'Algo deu errado'
        }
    }

    // console.log(dataHorarioProg)
    // console.log(dataAbreviada)

    res.render('index',{ api:resultadoGetDados, data:resultadoGetData, programacaoAtual, title: 'EPG', dataHeader: dataFront})
})

module.exports = route