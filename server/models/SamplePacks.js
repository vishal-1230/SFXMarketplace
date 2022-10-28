import mongoose from "mongoose";

const samplePacksSchema = new mongoose.Schema({
    name: String,
    link: String,
    size: Number
})

export default mongoose.model('SamplePacks', samplePacksSchema)