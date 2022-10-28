import SamplePacks from "../models/SamplePacks.js"

export const getSamplePacks = async (req, res)=>{
    SamplePacks.find({}, (err, data)=>{
        if(err) throw err;
        res.json(data)
    })
}