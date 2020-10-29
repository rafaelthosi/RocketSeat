const Tech = require('../model/Tech')
const User = require('../model/User')

module.exports = {
    async index(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { 
                association: 'techs',
                attributes: ['id', 'name'],
                through: {
                    attributes: ['user_id', 'tech_id']
                }
            }
        })

        return res.json(user.techs)
    },

    async store(req, res) {
        const { user_id } = req.params
        const { name} = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(500).json({ error: "User not found" })
        }

        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        })

        await user.addTech(tech)

        return res.json(tech)
    },

    async delete(req, res) {
        const { user_id } = req.params
        const { name} = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(500).json({ error: "User not found" })
        }

        const tech = await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech)

        return res.json( {mensagem: 'Relacionamento com a Tecnologia Deletado com sucesso!'} )
      }
}