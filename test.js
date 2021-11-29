/**
 *   Create a variable and function and export it for app.js to use
 */
// class moduler{

//     let importedVariable = 'I\'m from Imported test.js'
//     importedFunction = function(){
//        return 'I\'m from Imported function test.js'
//     }
// }

class moduler {
    // constructor(){
    //  //this.value = value 
    // }
   importedVariable = `I\'m from Imported test.js`
   importedFunction(value){
       return `I\'m from Imported function test.js ${value*2}`
   }
}
module.exports = new moduler();

