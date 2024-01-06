// const events = require('events')
const events = require('./modules/event')
const http= require('http');
const { Module } = require('module');
const server = http.createServer();
server.listen(8000,'127.0.0.1',()=>{
    console.log('serverstartd');
});
server.on('request',(req,res)=>{
    res.end('hello from event request')
});
let myevent= new events();
myevent.on('showmsgmyevent',(... args)=>{
    let pra = args.join(',');
    pra=pra.replace(',',' ');
    console.log('hello from custom event'+ `${args}`);
});
myevent.emit('showmsgmyevent',2,3,4,5,6,7,8,6,4,3,2,34,5,6,7,34,5,6,'rfd','r','gf');