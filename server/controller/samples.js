import Samples from "../models/Samples.js"

export const getSamples = async(req, res)=>{
    Samples.find({category: req.query.category, bpm:req.query.bpm, genre:req.query.genre, key:req.query.key}, (err, data)=>{
        if (err) throw err;
        res.json(data)
    })
}

export const downloadSample = async (req, res)=>{
    res.download('../uploads/'+req.query.name+'.wav')
}