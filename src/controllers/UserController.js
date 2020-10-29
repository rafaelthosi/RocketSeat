const User = require('../model/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
        const { name, email } = req.body

        const user = await User.create({ name, email}) //abreviação de: "name: name, email: email"

        return res.json(user)
    }
}