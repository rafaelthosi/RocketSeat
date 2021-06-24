const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    static init(sequelize) {
        super.init({
            zipcode: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Esse campo não pode ser vazio!'
                    },
                    isNumeric: {
                        msg: 'Esse Campo só deve conter números!'
                    }
                }

            },
            street: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Esse campo não pode ser vazio!'
                    },
                    isAlpha: {
                        msg: 'Este Campo só deve conter letras'
                    }
                }
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Esse campo não pode ser vazio!'
                    },
                    isNumeric: {
                        msg: 'Esse Campo só deve conter números!'
                    }
                }
            },
        }, {
            sequelize //abreviação de: "sequelize: sequelize"
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Address