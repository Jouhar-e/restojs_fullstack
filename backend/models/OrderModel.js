import { Sequelize } from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Order = db.define('order',{
    idorder:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    idpelanggan: DataTypes.INTEGER,
    tglorder: DataTypes.DATEONLY,
    total: DataTypes.REAL,
    bayar: DataTypes.REAL,
    kembali: DataTypes.REAL,
    status: DataTypes.INTEGER
},{
    freezeTableName:true
})

export default Order;

(async()=>{
    db.sync()
})()