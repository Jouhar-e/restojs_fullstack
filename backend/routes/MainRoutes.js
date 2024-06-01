import express from 'express'
import { createKategori, deleteKategori, getKategori, getKategoriById, getKategoriByName, getKategoriByOne, updateKategori } from '../controllers/KategoriController.js'
import { createMenu, deleteMenu, getMenu, getMenuById, getMenuByIdKategori, getMenuByName, updateMenu } from '../controllers/MenuController.js'
import { createPelanggan, deletePelanggan, getPelanggan, getPelangganById, getPelangganByName, getPelangganLogin, updatePelanggan, updatePelangganStatus} from '../controllers/PelangganController.js'
import { getOrder } from '../controllers/OrderController.js'
import { getOrderDetail } from '../controllers/OrderDetailController.js'
import { createUser, deleteUser, getUser, getUserById, getUserByName, getUserLogin, updateUser, updateUserStatus } from '../controllers/UserController.js'

const routes = express.Router()

const levelPetugas = (req, res, next) => {
    if (req.query.level == "Admin") {
        next()
    }else if (req.query.level == "Koki") {
        next()
    }else if (req.query.level == "Kasir") {
        next()
    }else{
        res.send("Dilarang!")
    }
}

// route kategori
routes.get('/kategori', levelPetugas, getKategori)
routes.get('/kategori/one',getKategoriByOne)
routes.get('/kategori/:id',getKategoriById)
routes.get('/carikategori/:name',getKategoriByName)
routes.post('/kategori',createKategori)
routes.patch('/kategori/:id',updateKategori)
routes.delete('/kategori/:id',deleteKategori)

// route menu
routes.get('/menu',getMenu)
routes.get('/menu/:id',getMenuById)
routes.get('/menukategori/:id',getMenuByIdKategori)
routes.get('/carimenu/:name',getMenuByName)
routes.post('/menu',createMenu)
routes.patch('/menu/:id',updateMenu)
routes.delete('/menu/:id',deleteMenu)

// route pelanggan
routes.get('/pelanggan',getPelanggan)
routes.get('/pelanggan/:id',getPelangganById)
routes.get('/caripelanggan/:name',getPelangganByName)
routes.post('/pelanggan',createPelanggan)
routes.patch('/pelanggan/:id',updatePelanggan)
routes.patch('/pelangganstatus/:id',updatePelangganStatus)
routes.delete('/pelanggan/:id',deletePelanggan)

// route user
routes.get('/user',getUser)
routes.get('/user/:id',getUserById)
routes.get('/cariuser/:name',getUserByName)
routes.post('/user',createUser)
routes.patch('/user/:id',updateUser)
routes.patch('/userstatus/:id',updateUserStatus)
routes.delete('/user/:id',deleteUser)

// route login
routes.post('/pelanggan/login',getPelangganLogin)
routes.post('/user/login',getUserLogin)


// route order
routes.get('/order',getOrder)

// route orderdetail
routes.get('/orderdetail',getOrderDetail)


export default routes