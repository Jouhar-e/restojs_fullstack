import { Sequelize } from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize

const OrderDetail = db.define('orderdetail',{
    idorderdetail:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    idorder: DataTypes.INTEGER,
    idmenu: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    hargajual: DataTypes.REAL
},{
    freezeTableName:true
})

export default OrderDetail;

(async()=>{
    db.sync()
})()