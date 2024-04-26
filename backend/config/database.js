import { Sequelize } from "sequelize"

const db = new Sequelize('resto-js','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db