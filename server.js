const http = require('http')
const date = require('./date')
//create server

http.createServer(function(req,res){
    res.writeHead(200)
    res.end(`Hi I\'m from Node HTTP Server at ${date}`)
}).listen(3000)
