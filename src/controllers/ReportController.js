const { Op } = require('sequelize') 
const User = require('../model/User')

module.exports = {
    async show(req, res) {




        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Joao Silva Das Neves Gomes' } },
                { 
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: '%.js'
                        }
                    } 
                }
            ]
        })

        return res.json(users)
    }
}