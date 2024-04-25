const express = require("express")
const library = require("./Controllers/library")

const route = express()

route.get("/livros", library.consultaColecao)
route.get("/livros/:id", library.consultaDetalhada)
route.post("/livros", library.adicionandoLivro)

module.exports = route