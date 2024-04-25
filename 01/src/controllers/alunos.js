let { alunos, id_aluno } = require("../database/database")
let { cursos } = require("../database/cursos")

const listagem = (req, res) => {
    return res.status(200).json(alunos)
}

const informacaoDoAluno = (req, res) => {
    const { id } = req.params

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if (!aluno) {
        return res.status(404).json({mensagem: "Aluno nao encontrado"})
    } else if(!id) {
        return res.status(400).json({mensagem: "Informe um numero de ID valido"})
    } else {
        return res.status(200).json(aluno)
    }
}

const cadastroAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if(!nome.trim()) {
        return res.status(400).json({ mensagem: "Informe seu nome"})
    } else if(!sobrenome.trim()) {
        return res.status(400).json({ mensagem: "Informe seu sobrenome"})
    } else if(!idade) {
        return res.status(400).json({ mensagem: "Informe seu idade"})
    } else if(!curso.trim()) {
        return res.status(400).json({ mensagem: "Informe seu curso"})
    }

    if(idade < 18) {
        return res.status(400).json({ mensagem: "Volte quando tiver mais de 18 anos"})
    }

    const existeCurso = cursos.find((cursoAtual) => {
        return cursoAtual === curso
    })

    if(!existeCurso) {
        cursos.push(curso)
    }

    const aluno = { 
        id: id_aluno++,
        nome,
        sobrenome,
        curso
    }

    alunos.push(aluno)

    return res.status(201).json(aluno)
}

const deleteAluno = (req, res) => {
    const { id } = req.params

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if(!id) {
        return res.status(400).jason({mensagem: "O ID deve ser um numero valido"})
    } 

    if(!aluno) {
        return res.status(400).jason({mensagem: "O aluno informado nao foi encontrado"})
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    })

    return res.status(200).send()
}

module.exports = { listagem, informacaoDoAluno, cadastroAluno, deleteAluno }