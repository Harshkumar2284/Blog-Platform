const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName: {type: String, required: true},
    Pass: {type: String, required: true},
    First_Name: {type: String, required: true},
    Last_Name: {type: String, required: false},
    PrefSet: {type: Boolean, required: true},
    Preferences: {type: Array, required: true}
})

module.exports = mongoose.model("user", userSchema)