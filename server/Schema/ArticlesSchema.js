const mongoose = require("mongoose")

const articleSchema = mongoose.Schema({
    title: {type:String, required: true},
    body: {type:String, required: true},
    author: {type:String, required:true},
    tags: {type:Array, required:true},
    likes: {type:Array, required:true},
    likeNum: {type:Number, required:true}
})

module.exports = mongoose.model("article",articleSchema)