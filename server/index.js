import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import Samples from './models/Samples.js'
import jwt from 'jsonwebtoken'
import 'ejs'
import bcrypt from 'bcrypt'
import formidable from 'formidable'
import fs from 'fs'
import multer from 'multer'
import audios from './routes/audios.js'

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      console.log('filename')
      cb(null, (file.originalname+'.wav'))
    },
    destination: function (req, file, cb) {
      console.log('storage')
      cb(null, './uploads')
    },
  })

const upload=multer({storage})

const app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))
dotenv.config()


const port=process.env.PORT || 8080

app.use('/audios', audios)

// mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.uy65a.mongodb.net/?retryWrites=true&w=majority', (err)=>{if (err) throw err; console.log('connected');})
mongoose.connect('mongodb+srv://anvkup:ansh_1620@cluster0.uy65a.mongodb.net/?retryWrites=true&w=majority', (err)=>{if (err) throw err; console.log('connected');})
var db=mongoose.connection

console.log((db.collections))

Samples.create({category:'trial'}, (err)=>{if(err) throw err; console.log('successfully created');})
console.log(db.collections)

// Sign Up nd Login
app.get('/signup/checkUser', (req, res)=>{
    userpass.find({user:req.query.user}, (err, data)=>{
        console.log(data);
        if (err) throw err;
        if (data.length==0){
            res.json('1')
        }else{
            res.json('0')
        }
    })    
})

app.get('/signup/checkPass', (req, res)=>{
    const nums=[1,2,3,4,5,6,7,8,9,0]
    const alphas='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log('checking pass');
    const pass=req.query.pass
    
    let haveNum=false
    let haveAlpha=false
    let haveSymb=true
    
    for (let i of pass){
        for (let i2 of nums){
            if (i==i2){
                haveNum=true
                break
            }
        }
    }
    for (let i3 of pass){
        for (let i4 of alphas){
            if (i3==i4){
                haveAlpha=true
                break
            }
        }
    }
    let alphanums=0
    for (let i5 of pass){
        for (let i6 of 'abcdefghijklmnopqrstuvwxyz1234567890'){
            if (pass!=''){
                if (i5==i6){
                    alphanums++
                }
            }
        }
    }
    
    if (alphanums==pass.length){
        haveSymb=false
    }else{
        haveSymb=true
    }

    if (haveAlpha && haveNum && haveSymb){
        res.json('1')
    }else{
        res.json('0')
    }

})

app.post('/signup', (req, res)=>{
    console.log('signing up');
    async function hash(){
        let hashedPass = await bcrypt.hash(req.body.pswd, 10)
        console.log(hashedPass.toString());
        const randomBytes=crypto.randomBytes(2).toString('hex')
        const rid=req.body.user+randomBytes.toString()
        userpass.create({user:req.body.user, name:req.body.name, pswd:hashedPass.toString(), rid:rid}, (err)=>{console.log(err);})
        referral.create({user:req.body.user, referralId:rid, referredUsers:[]})
        res.redirect('http://192.168.43.189:3000/')
    }
    hash() 
})


app.post('/login', (req, res)=>{
    console.log(req.body.user)
    userpass.find({user:req.body.user}, (err, data)=>{
        console.log(data)
        if (data.length==0){
            res.render('afterLogin', {exists:false, key:'', correct:false})
            console.log('doesnt exists');
        }else{
            async function checkCorrect(){
                const exists=await bcrypt.compare(req.body.pswd, data[0].pswd)
                if (exists.toString()=='true'){
                    console.log(process.env.SECRET_TOKEN)
                    const key=jwt.sign({user:req.body.user}, process.env.SECRET_TOKEN, {expiresIn: '6h'})
                    console.log(key);
                    res.render('afterLogin', {exists:true, correct:true, key:key})
                    console.log('correct pass');
                }else{
                    res.render('afterLogin', {exists:true, correct:false, key:''})
                    console.log('wrong pass');
                }
            }
            checkCorrect()
        }
    })
})

app.post('/uploadSample', upload.single('trial'), (req, res)=>{
    console.log(req.body);
    return res.json({Status: 'OK'})
})


app.listen(port)