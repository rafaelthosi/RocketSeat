const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Esse Campo Não pode ser vazio!'
                    }/*,
                    len: {
                        args: [4, 20],
                        msg: 'Esse Campo deve ter entre 4 e 20 caracteres'
                    },*/
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Esse Campo Não pode ser vazio!'
                    },
                    isEmail: {
                        msg: 'Este campo precisa ser um e-mail'
                    }
                }
            }
        }, {
            sequelize //abreviação de: "sequelize: sequelize"
        })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })

    }
}

module.exports = User