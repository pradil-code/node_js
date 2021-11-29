const express = require('express')
const date = require('./date')
const app = express()
const PORT = 3000
app.listen(PORT,()=> console.log(`server listening on port:${PORT}`))
app.get('/',(req,res) =>
 res.send('I\'m from express')
 )

app.get('/date',(req,res)=>{
    res.status(200)
    res.send(`I\'m from ${date()}` )
})