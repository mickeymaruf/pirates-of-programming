const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res)=>{
    res.send("Welcome to the server of Pirates of Programming.🥳")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})