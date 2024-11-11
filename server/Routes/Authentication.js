const express = require('express')
const session = require('express-session')
const user = require('../Schema/Users')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/register',async (req,res)=>{
    console.log("received")
    try {
        const {UserName, Passw, First_Name, Last_Name} = req.body
        if(!UserName || !Passw ){
            console.log("boo")
            return res.status(400).json({message:"All required fields not provided"})
        }
        const check = await user.findOne({UserName})
        if(check){
            return res.status(400).json({message: "Username already exists"})
        }else{
            const Pass = await bcrypt.hash(Passw,10)
            const PrefSet = false
            const Preferences = []
            const newUser = new user({
                UserName,
                Pass,
                First_Name,
                Last_Name,
                PrefSet,
                Preferences
            })
            await newUser.save()
            req.session.UserName = newUser.UserName
            req.session.isAuthenticated = true
            req.session.save(err => {
                if (err) return res.status(500).json({ message: "Server Error" });
                res.status(200).json({ message: "Login successful" });
            })
            
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"})
    }
})

router.post('/login', async(req,res)=>{
    const {UserName, Passw} = req.body
    const check = await user.findOne({UserName})
    if(!check){
        return res.json({message:"Bad Credentials"})
    }else{
        const passcheck = await bcrypt.compare(Passw,check.Pass)
        if(!passcheck){
            return res.json({message:"Bad Credentials"})
        }
    }
    req.session.UserName = check.UserName
    req.session.isAuthenticated = true
    res.status(201).json({message:"done"})
})

router.get("/check", (req,res)=>{
    if(!req.session.UserName){
        return res.sendStatus(200)
    }else{
        return res.sendStatus(201)
    }
})
// router.put('/pref', async(req,res)=>{
//     const UserName = req.session.UserName
//     const pref = req.body.pref
//     const check = await user.findOne({UserName})
//     if (!check) {
//         return res.status(400)
//     }
//     user
// })

module.exports = router