const mongoose= require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName:{type:String, required:true}, 
    description:{type:String, required:true},
    auther:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:String, required:true},
},{timestamps:true})


module.exports = new mongoose.model('book',bookSchema)