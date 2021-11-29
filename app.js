const importFile = require('./test')
//console.log(importFile)
console.log('Who are you?:'+ importFile.importedVariable)
let a = 2
console.log('You are from:'+ importFile.importedFunction(a))