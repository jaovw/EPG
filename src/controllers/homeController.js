const axios = require('axios')

async function getDados(diaAtual) {

    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${diaAtual}`)

    return resultado.data
}

async function getHora(diaAtual) {

    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${diaAtual}`)
    return resultado.data.programme.entries

}

module.exports = {getDados, getHora}
