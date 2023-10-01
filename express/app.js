
const express = require('express')
const app = express()

app.use("/add-product", (req, res, next) => {
    res.send("<h1>This is the add a product page.")
})
app.use((req, res, next) => {
    console.log("in middleware 2")
    res.send("<h1>Hello this is a new page</h1>")
})


app.listen(3000)