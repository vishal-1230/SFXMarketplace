import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'


const app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))
dotenv.config()

const port=process.env.PORT || 8080


mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.uy65a.mongodb.net/sfxm?retryWrites=true&w=majority', (err)=>{if (err) throw err; console.log('connected');})
var db=mongoose.connection

console.log((db.collections))

app.listen(port)