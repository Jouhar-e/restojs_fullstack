import {json,where,Op} from 'sequelize'
import Kategori from '../models/KategoriModel.js'

export const getKategori= async(req,res)=>{
    try{
        const response = await Kategori.findAll()
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getKategoriByOne = async(req,res)=>{
    try{
        const response = await Kategori.findOne()
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}


export const getKategoriById = async(req,res)=>{
    try{
        const response = await Kategori.findOne({
            where:{
                idkategori: req.params.id
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const getKategoriByName = async(req,res)=>{
    try{
        const response = await Kategori.findAll({
            where:{
                kategori:{[Op.like]: `%${req.params.name}%`}
            }
        })
        res.status(200).json(response)
    }catch{
        console.log(error.messange)
    }
}

export const createKategori = async(req,res)=>{
    try{
        await Kategori.create(req.body)
        res.status(201).json({msg:"Create success.."})
    }catch{
        console.log(error.messange)
    }
}

export const updateKategori = async(req,res)=>{
    try{
        await Kategori.update(req.body,{
            where:{
                idkategori: req.params.id
            }
        })
        res.status(200).json({msg:"Update success.."})
    }catch{
        console.log(error.messange)
    }
}

export const deleteKategori = async(req,res)=>{
    try{
        await Kategori.destroy({
            where:{
                idkategori: req.params.id
            }
        })
        res.status(200).json({msg:"Delete success.."})
    }catch{
        console.log(error.messange)
    }
}