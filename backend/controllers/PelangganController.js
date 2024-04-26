import {json,where,Op} from 'sequelize'
import Pelanggan from '../models/PelangganModel.js'

export const getPelanggan= async(req,res)=>{
    try{
        const response = await Pelanggan.findAll()
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getPelangganLogin= async(req,res)=>{
    try{
        const response = await Pelanggan.findOne({
            where:{
                email: req.body.email,
                password: req.body.password,
                status:1
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getPelangganById = async(req,res)=>{
    try{
        const response = await Pelanggan.findOne({
            where:{
                idpelanggan: req.params.id
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getPelangganByName = async(req,res)=>{
    try{
        const response = await Pelanggan.findAll({
            where:{
                pelanggan:{[Op.like]: `%${req.params.name}%`}
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const createPelanggan = async(req,res)=>{
    try{
        await Pelanggan.create(req.body)
        res.status(201).json({msg:"Create success.."})
    }catch{
        console.log(error.messange)
    }
}

export const updatePelanggan = async(req,res)=>{
    try{
        await Pelanggan.update(req.body,{
            where:{
                idpelanggan: req.params.id
            }
        })
        res.status(200).json({msg:"Update success.."})
    }catch{
        console.log(error.messange)
    }
}

export const updatePelangganStatus = async(req,res)=>{
    try{
        await Pelanggan.update({
            status: req.body.status
        },{
            where:{
                idpelanggan: req.params.id
            }
        })
        res.status(200).json({msg:"Update status success.."})
    }catch{
        console.log(error.messange)
    }
}

export const deletePelanggan = async(req,res)=>{
    try{
        await Pelanggan.destroy({
            where:{
                idpelanggan: req.params.id
            }
        })
        res.status(200).json({msg:"Delete success.."})
    }catch{
        console.log(error.messange)
    }
}