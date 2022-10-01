var url = require("url");
// var result = url.parse("https://www.google.com/search?q=utf8+why+we+use&oq=utf8+why+we+use&aqs=chrome..69i57j0i5i13i30j0i390l4.11012j1j7&sourceid=chrome&ie=UTF-8");
// console.log(result);
var http = require("http");
var fs= require("fs");
http.createServer((req,res)=>{
    var parsed=url.parse(req.url);
    //console.log(parsed.pathname);
    fs.readFile("."+parsed.pathname,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("error page not found");
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(3000);