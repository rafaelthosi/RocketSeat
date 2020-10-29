const { findByPk } = require('../model/Address')
const Address = require('../model/Address')
const User = require('../model/User')
const { index } = require('./UserController')

module.exports = {
    async index(req, res) {
        const { user_id } = req.params 

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' } //esse addresses vem de model/User linha 14
        })

        // return res.json(user.addresses) //esse addresses vem de model/User linha 14
        return res.json(user)
    },

    async store(req, res) {
        const { user_id } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(500).json({ error: 'User not found' })
        }

        const addresses = await Address.create({
            zipcode,
            street,
            number,
            user_id
        })

        return res.json(addresses)
    }
}