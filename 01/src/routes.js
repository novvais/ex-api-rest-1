const express = require('express');
const { validatePassword } = require("./intermediarios")
const alunos = require("./controllers/alunos")

const route = express()

route.get("/alunos", alunos.listagem)
route.get("/alunos/:id", validatePassword, alunos.informacaoDoAluno)
route.post("/", validatePassword, alunos.cadastroAluno)
route.delete("/:id", validatePassword, alunos.deleteAluno)

module.exports = route