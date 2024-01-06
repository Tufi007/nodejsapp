const fs= require('fs');
const http= require('http');
let server = http.createServer();
server.listen(8000,'127.0.0.1',()=>{
    console.log('server started');
});
// server.on('request',(req,res)=>{
//     let rs = fs.createReadStream('./largedata.txt');
//     rs.on('data',(chunk)=>{
//         res.write(chunk);
//         res.end();
//     })
// })
server.on('request',(req,res)=>{
    let rs = fs.createReadStream('./largedata.txt');
    rs.on('data',(chunk)=>{
        res.write(chunk);
        
    })
    rs.on('end',()=>{
        res.end();
    })
})