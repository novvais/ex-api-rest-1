const express = require('express');
const { validatePassword } = require("./intermediarios")
const convidados = require("./controllers/convidados")

const route = express()

route.get("/convidados", convidados.listagemConvidados)
route.post("/convidados", convidados.adicionandoConvidados)
route.delete("/convidados", convidados.deleteConvidado)

module.exports = route