import {json, where, Op} from 'sequelize'
import User from '../models/UserModel.js'

export const getUser = async(req,res)=>{
    try {
        const response = await User.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getUserLogin = async(req,res)=>{
    try {
        const response = await User.findOne({
            where:{
                email: req.body.email,
                password: req.body.password,
                status: 1
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async(req,res)=>{
    try {
        const response = await User.findOne({
            where: {
                iduser: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getUserByName = async(req,res)=>{
    try {
        const response = await User.findAll({
            where: {
                user: {[Op.like]: `%${req.params.name}%`}
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async(req,res)=>{
    try {
        await User.create(req.body)
        res.status(201).json({msg:"Create success..."})
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async(req,res)=>{
    try {
        await User.update(req.body,{
            where:{
                iduser: req.params.id
            }
        })
        res.status(200).json({msg:"Update success..."})
    } catch (error) {
        console.log(error)
    }
}

export const updateUserStatus = async(req,res)=>{
    try {
        await User.update({
            status: req.body.status
        },{
            where:{
                iduser: req.params.id
            }
        })
        res.status(200).json({msg:"Update success..."})
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async(req,res)=>{
    try {
        await User.destroy({
            where:{
                iduser: req.params.id
            }
        })
        res.status(200).json({msg:"Delete success..."})
    } catch (error) {
        console.log(error)
    }
}