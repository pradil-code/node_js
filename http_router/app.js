const { response } = require('express');
const url = require('url')

const homeController = (req,res)=>{
    res.writeHead(200)
    res.write('I\'m from Home controller')
    res.end()
}

const loginController = function(req,res){

    res.writeHead(200)
    res.write('I\'m from Login controller')
    res.end()
}
module.exports = {

    handleRequest : (req,res)=>{
      let path = req.url
      switch(path){
            case '/':
               homeController(req,res)
               break;
            case '/login':
                loginController(req,res)
                break;
            default:
                res.writeHead(404)
                res.write('URL Not Found')
                res.end()

      }
      
    }
}