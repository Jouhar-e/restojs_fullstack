import {json,where} from 'sequelize'
import Order from '../models/OrderModel.js'

export const getOrder = async(req,res)=>{
    try{
        const response = await Order.findAll()
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}