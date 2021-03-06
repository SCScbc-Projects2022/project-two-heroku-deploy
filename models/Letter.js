const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Letter extends Model {}

Letter.init(
    {
        // id is generated serverside using npm uniqid to better protect letters from randomly being accessed
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: false
        },
        sign_off: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipient_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipient_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }   
        },
        letter_body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        song_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        font_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'font',
                key: 'id'
            }
        },
        readonly: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'letter'
    }
)

module.exports = Letter;