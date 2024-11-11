const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session')
const connect = require('./config/confiig')
const cors = require("cors")
connect()


const port = 8080 || process.env.PORT

app.use(session({
    secret:"secret-key",
    resave:false,
    saveUninitialized:false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(require(path.join(__dirname,"Routes/Authentication")))
app.use(require(path.join(__dirname,"Routes/Article")))



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})