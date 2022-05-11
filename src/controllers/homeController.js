const paginaInicial = (req, res) => {
    res.render('index')
}

const post = (req, res) => {
    res.send('Sua nova rota de POST')
}

module.exports = {paginaInicial, post}