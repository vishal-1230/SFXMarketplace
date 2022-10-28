import mongoose from "mongoose";

const blogsSchema=new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    data_time:String,
    mentions:String,
    source:String
})

export default mongoose.model('Blogs', blogsSchema)