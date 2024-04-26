import {json,where,Op} from 'sequelize'
import Menu from '../models/MenuModel.js'

export const getMenu = async(req,res)=>{
    try{
        const response = await Menu.findAll()
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getMenuById = async(req,res)=>{
    try{
        const response = await Menu.findOne({
            where:{
                idmenu: req.params.id
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getMenuByIdKategori = async(req,res)=>{
    try{
        const response = await Menu.findAll({
            where:{
                idkategori: req.params.id
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getMenuByName = async(req,res)=>{
    try{
        const response = await Menu.findAll({
            where:{
                menu:{[Op.like]: `%${req.params.name}%`}
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const createMenu = async(req,res)=>{
    try{
        await Menu.create(req.body)
        res.status(201).json({msg:"Create success.."})
    }catch{
        console.log(error.messange)
    }
}

export const updateMenu = async(req,res)=>{
    try{
        await Menu.update(req.body,{
            where:{
                idmenu: req.params.id
            }
        })
        res.status(200).json({msg:"Update success.."})
    }catch{
        console.log(error.messange)
    }
}

export const deleteMenu = async(req,res)=>{
    try{
        await Menu.destroy({
            where:{
                idmenu: req.params.id
            }
        })
        res.status(200).json({msg:"Delete success.."})
    }catch{
        console.log(error.messange)
    }
}