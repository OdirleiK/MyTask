const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{

    sequelize.authenticate()
    console.log('conectado ao db com sucesso')


}catch(error) {
    console.log(`Nao foi possivel conectar: ${error}`)
}

module.exports = sequelize