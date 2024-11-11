const mongoose = require("mongoose")

const tags = mongoose.Schema({
    tag: {type:String, required:true},
    count: {type:Number, require:true}
})

module.exports = mongoose.model("Tags", tags)