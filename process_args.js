/**
 *  Capture the argument from node js command line 
 */

console.log(process.argv)

const myArgs = process.argv.slice(2)
switch(myArgs[0]){
    case 'insult':
        console.log(myArgs[0],'it is a bad experience')
        break
    case 'hungry':
         console.log(myArgs[0],'I\'m feeling hubgry')    
         break;
    default:
        console.log('Nothing to say great about it ')
    
}

/*
Test result 


i/p : node process.args.js hungry

o/p : 
[
    '/usr/local/bin/node',
    '/Users/pradeep/Documents/coding/node_js/node_js/process_args.js',
    'hungry'
  ]

 */ 