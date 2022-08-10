const Sequelize = require('sequelize')

const sequelize = new Sequelize('group_chat', 'root', '123@Hello', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;