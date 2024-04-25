let convidados = require("../database/database")

const listagemConvidados = (req, res) => {
    const { nome } = req.query

    if(!nome) {
        return res.status(200).json(convidados)
    }  

    const convidado = convidados.find((convidado) => {
        return convidado === nome
    }) 

    if (!convidado) {
        return res.status(404).json({mensagem: "O convidado buscado não está presente na lista."})
    } 

    return res.status(200).json({mensagem: "O convidado esta na lista"})
}

const adicionandoConvidados = (req, res) => {
    const { nome } = req.body

    if(!nome) {
        return res.status(400).json({ mensagem: "Preencha o nome"})
    }

    const verificacao = convidados.find((convidado) => {
        return convidado === nome
    })

    if(verificacao) {
        return res.status(400).json({mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."})
    }

    convidados.push(nome)

    return res.status(201).json({mensagem: "Convidado adicionado"})
}

const deleteConvidado = (req, res) => {
    const { nome } = req.query

    const convidado = convidados.find((convidado) => {
        return convidado === nome
    })

    if(!convidado) {
        return res.status(404).jason({mensagem: "O convidado nao existe"})
    }

    convidados = convidados.filter((convidado) => {
        return convidado !== nome
    })

    return res.status(204).send()
}

module.exports = { listagemConvidados, adicionandoConvidados, deleteConvidado }