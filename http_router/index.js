const http = require('http')
const app = require('./app')
const port =8080
http.createServer(app.handleRequest).listen(port,()=> console.log(`Server listening on Port ${port}`))