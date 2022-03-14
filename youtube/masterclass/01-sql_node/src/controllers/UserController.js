const User = require('../model/User')

module.exports = {
    async index(req, res) {
        try {
            const name = req.query.name

            if (name) {
                const users = await User.findAll({ where: { name } })
                return res.status(200).json(users)
            } else {
                const users = await User.findAll()
                return res.status(200).json(users)
            }
        } catch (error) {
            return res.status(400).send({ error: error })
        }
    },

    async store(req, res) {
        try {
            const { name, email } = req.body

            const user = await User.create({ name, email}) //abreviação de: "name: name, email: email"

            return res.status(200).json(user)
        } catch (error) {
            let err = []
            for (let cont = 0; cont < error.errors.length; cont++) {
                err.push({
                    Campo: error.errors[cont].path,
                    Mensagem: error.errors[cont].message
                }) 
            }
            
            return res.status(400).json({erros: err})
        }
        
    }
}