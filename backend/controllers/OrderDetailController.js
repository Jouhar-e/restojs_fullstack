import {json,where} from 'sequelize'
import OrderDetail from '../models/OrderDetailModel.js'

export const getOrderDetail = async(req,res)=>{
    try{
        const response = await OrderDetail.findAll()
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}