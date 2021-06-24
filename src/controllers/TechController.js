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
        try {
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

            return res.status(200).json(tech)
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