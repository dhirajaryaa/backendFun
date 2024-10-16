require('dotenv').config()
const express = require('express');

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('Hello twitter!')
})
app.get('/progress',(req,res)=>{
  res.send('<h1> Today I have learn how to create server and deploy online. Thanks to Sir Hitesh Chaudhary for his guidance and support.</h1>')
})
app.get('/login',(req,res)=>{
  res.send('<h1> Please Login on chat aur code. </h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2> This is Youtube path </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
