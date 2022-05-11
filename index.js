const axios = require('axios')
let dados =[]

axios('https://epg-api.video.globo.com/programmes/1337?date=2022-05-11').then(res => getDados(res.data.programme.entries))

function getDados(json){
    // console.log(json)
    
    const tabela = document.createElement('table')

    for(let dado of json){
        // console.log(dado.title)

        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = dado.title
        tr.appendChild(td1)

        tabela.appendChild(tr)
    }

    const elemento = document.querySelector('.resultado')
    elemento.appendChild(tabela)

}   
