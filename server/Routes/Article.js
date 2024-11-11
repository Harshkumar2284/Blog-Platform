const express = require('express')
const router = express.Router()
const article = require("../Schema/ArticlesSchema")
const Tags = require("../Schema/Tags")
var tagCheck


// Middlewere for Authentication
const authenticated = (req,res,next)=>{
    if(req.session.isAuthenticated === true){
        next()
    }else{
        res.status(401).json({message:"User not authenticated"})
    }
}


//Post Article
router.post("/post",authenticated ,async(req,res)=>{
    const {title, body, tags} = req.body
    const likes = [req.session.UserName]
    console.log(typeof(likes))
    const likeNum = likes.length
    const author = req.session.UserName
    const newArticle = new article({
        title,
        body,
        author,
        tags,
        likes,
        likeNum
    })
    await newArticle.save()
    tags.forEach(async(tag)=>{
        tagCheck = await Tags.findOne({tag})
        if(!tagCheck){
            const count = 1
            const newtag = new Tags({
                tag,
                count
            })
            await newtag.save()
        }else{
            await Tags.findOneAndUpdate(
                {tag},
                {$inc:{count:1}},
                {new:true}
            )
        }
    })
    res.status(200).json({message:"your article has been posted"})
})



//Get Most Popular Articles
router.get('/topArticles',async(req,res)=>{
    const topArticle =await article.find({}).sort({likeNum: -1}).limit(10)
    res.status(200).json(topArticle)
})


// Get a single Article
router.post("/getArticle", async(req,res)=>{
    const id = req.body
    const art = await article.findOne({_id: id.id})
    res.json(art)
})

// Get top tags
router.get("/getTags",async(req,res)=>{
    const tag = await Tags.find({}).sort({count:-1}).limit(10)
    res.json(tag)
})


module.exports = router