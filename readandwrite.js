const read= require('fs');
let readdata= read.readFileSync('./input.txt','utf-8');
console.log(readdata);
read.writeFileSync('./output.txt',`the new data in output is: ${readdata} on ${new Date()}`);