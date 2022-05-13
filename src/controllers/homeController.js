const axios = require('axios')

async function getDataApi(diaAtual) {

    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${diaAtual}`)

    return resultado.data.programme
}

async function getDadosApi(diaAtual) {

    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${diaAtual}`)
    return resultado.data.programme.entries
}

module.exports = {getDataApi, getDadosApi}
