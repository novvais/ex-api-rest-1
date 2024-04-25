const validatePassword = (req, res, next) => {
    const { password } = req.query

    if(!password) {
        res.status(404).json({mensagem: "Informe a senha por favor"})
    } else if (password !== "cubos123") {
        res.status(400).json({mensagem: "Senha incorreta"})
    }

    next()
}

module.exports = { validatePassword } 