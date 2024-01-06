const http= require('http');
const server= http.createServer((req,res)=>{
console.log('in the server');
res.end('hello from the server');
console.log(req);
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started');
});
