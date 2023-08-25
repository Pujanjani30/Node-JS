//  import file 
let app = require('./app.js');

console.log(app); 
console.log(app.X); 
console.log(app.Y); 
console.log(app.Z()); 

//------------------------------------------------------------------------------------------------

// file system is a non global object or module

let fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');

// console is a global object or module

console.log(fs.readFileSync('test.txt').toString());

// we can also use only one function of a module 

let fs2 = require('fs').writeFileSync
fs2('test2.txt', 'Hello World Again');

// we can also use destructuring to use only one function of a module 

let {writeFileSync} = require('fs'); 
writeFileSync('test3.txt', 'Hello World Again and Again');