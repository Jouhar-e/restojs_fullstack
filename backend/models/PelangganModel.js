import { Sequelize } from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Pelanggan = db.define('pelanggan',{
    idpelanggan:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    pelanggan: DataTypes.STRING,
    jeniskelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    telp: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INTEGER
},{
    freezeTableName:true
})

export default Pelanggan;

(async()=>{
    db.sync()
})()