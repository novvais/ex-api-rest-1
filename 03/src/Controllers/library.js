let { id_livro, livros } = require("../Database/books")

const consultaColecao = (req, res) => {
    res.status(200).json(livros)
}

const consultaDetalhada = (req, res) => {
    const id = req.params

    const livro = livros.find((livro) => {
        return livro.id = id
    })

    if(!id) {
        return res.status(400).json({mensagem: "Informe um ID"})
    }

    if(!livro) {
        return res.status(400).json({mensagem: "O valor do parâmetro ID da URL não é um número válido."})
    }

    return res.status(200).json(livro)

}

const adicionandoLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if(!titulo) {
        return res.status(400).json({mensagem: "Preencha o titulo."})
    }

    if(!autor) {
        return res.status(400).json({mensagem: "Preencha o nome do Autor"})
    }

    if(!ano) {
        return res.status(400).json({mensagem: "Preencha o Ano"})
    }

    if(!numPaginas) {
        return res.status(400).json({mensagem: "Preencha o numero de paginas"})
    }

    const verificacao = livros.find((livro) => {
        return livro.titulo === titulo
    })

    if(verificacao) {
        return res.status(400).json({mensagem: "O livro a ser adicionado ja existe na colecao"})
    }

    const dados = {
        id: id_livro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(dados)

    return res.status(200).json(livros)
}

const substituindoLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    livro = req.body

    return res.status(200).json({mensagem: "Livro substituido"})
}

module.exports = { consultaColecao, consultaDetalhada, adicionandoLivro, substituindoLivro }