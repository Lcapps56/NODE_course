const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

router.get("/add-product", (req, res, next) => {
    console.log("in another middleware")
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    // res.sendFile(rootDir, 'views', 'add-product.html')
})
router.post('/add-product', (req, res, next)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports = router