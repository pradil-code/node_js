// const asyncFunction = (value,callback)=>{
//     setTimeout(()=>{},3000)
//     callback(value)
// };

// asyncFunction(2,(x)=>{
// console.log(x)
// })

const fs = require('fs')

const readFileDemo = function(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,'utf-8',(error,data)=>{
            if(error){
                reject(error)
            }
            resolve(data)
        })
    })
}

// //when one Promise Function is invoked
// readFileDemo('./date.js')
// .then((data)=>console.log(JSON.stringify(data)))
// .catch((err)=>console.log(err))

//when multiple promises - all should be resolved else it will go to catch
Promise.all([
    readFileDemo('./date.js'),
    readFileDemo('./path.js'),
    readFileDemo('./test.js'),
]
)
.then((data)=>console.log(JSON.stringify(data[2])))
.catch((err)=>console.log(err))
//when multiple promises - returns an array of promises which has both resolved or rejected result 
Promise.allSettled([
    readFileDemo('./date.js'),
    readFileDemo('./paths.js'),
    readFileDemo('./test.js'),
])
.then((data)=>console.log(JSON.stringify(data)))  // goes to then block as 2/3 promises resolved 
.catch((err)=>console.log(err))

// O/p for Promise.allSettled
// [{"status":"fulfilled","value":"const getDate = function(){\n    return Date()\n}\n module.exports= getDate"},{"status":"rejected","reason":{"errno":-2,"code":"ENOENT","syscall":"open","path":"./paths.js"}},{"status":"fulfilled","value":"/**\n *   Create a variable and function and export it for app.js to use\n */\n// class moduler{\n\n//     let importedVariable = 'I\\'m from Imported test.js'\n//     importedFunction = function(){\n//        return 'I\\'m from Imported function test.js'\n//     }\n// }\n\nclass moduler {\n    // constructor(){\n    //  //this.value = value \n    // }\n   importedVariable = `I\\'m from Imported test.js`\n   importedFunction(value){\n       return `I\\'m from Imported function test.js ${value*2}`\n   }\n}\nmodule.exports = new moduler();\n\n"}]
// "/**\n *   Create a variable and function and export it for app.js to use\n */\n// class moduler{\n\n//     let importedVariable = 'I\\'m from Imported test.js'\n//     importedFunction = function(){\n//        return 'I\\'m from Imported function test.js'\n//     }\n// }\n\nclass moduler {\n    // constructor(){\n    //  //this.value = value \n    // }\n   importedVariable = `I\\'m from Imported test.js`\n   importedFunction(value){\n       return `I\\'m from Imported function test.js ${value*2}`\n   }\n}\nmodule.exports = new moduler();\n\n"