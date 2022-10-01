var http=require("http");
var fs=require("fs");

http.createServer((req,res)=>{
    fs.readFile("index.html",(e,data)=>{
        res.write(data);
        res.end();
    })
}).listen(3000)