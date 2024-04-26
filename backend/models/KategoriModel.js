import { Sequelize } from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Kategori = db.define('kategori',{
    idkategori:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    kategori: DataTypes.STRING
},{
    freezeTableName:true
})

export default Kategori;

(async()=>{
    await db.sync()
})()