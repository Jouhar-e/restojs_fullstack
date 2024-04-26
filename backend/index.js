import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import MainRoutes from './routes/MainRoutes.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(MainRoutes)

app.listen(5000,()=>console.log("Server is runing.."))