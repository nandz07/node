var http=require("http");//require used to include a new module & http is  amodule 
http.createServer((request,response)=>{
    response.write("<h1>welcome hai to node</h1>");
    response.end();

}).listen(3000);