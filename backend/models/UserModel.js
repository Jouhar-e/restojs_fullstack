import { Sequelize } from "sequelize"
import db from '../config/database.js'

const {DataTypes} = Sequelize

const User = db.define('user',{
    iduser:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    status: DataTypes.INTEGER
},{
    freezeTableName:true
})

export default User;

(async()=>{
    db.sync()
})()