var url=require("url");
var fs = require("fs");
var http=require("http");
// const { parse } = require("path");

http.createServer((req,res)=>{
    var parsed=url.parse(req.url);
    //console.log(parsed.pathname);
    fs.readFile("."+parsed.pathname,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("page not found");
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(3000);