console.log("hello");
const { on } = require('events');
const read=require('readline');
const rl=read.createInterface({
   input: process.stdin,
   output: process.stdout, 
});
rl.question('who is this',(s)=>{
    console.log('this is' + s);
    rl.close();
});
rl.on('close', ()=> console.log('readclosed'));