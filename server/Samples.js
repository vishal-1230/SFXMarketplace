import mongoose from "mongoose"

const sampleSchema= new mongoose.Schema({
    category:String,
    samples:Array,

})

// Array of samples will contain objects having name, id, url, Author, bpm/tempo, key, genre.


export default mongoose.model('samples', sampleSchema)