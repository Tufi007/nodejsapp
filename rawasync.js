const rw= require('fs');
const data = rw.readFile('./input.txt','utf-8',(error,data)=>{
    console.log(data);
});
const wdata= rw.writeFile('./output.txt',`data inserted through async method:${data} at ${new Date()} `,()=>{
    console.log('data wrote async');
});
console.log(data);
console.log('after the async method');
