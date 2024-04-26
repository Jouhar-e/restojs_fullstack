import { Sequelize } from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Menu = db.define('menu',{
    idmenu:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    idkategori: DataTypes.INTEGER,
    menu: DataTypes.STRING,
    gambar: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    harga: DataTypes.REAL
},{
    freezeTableName:true
})

export default Menu;

(async()=>{
    db.sync()
})()