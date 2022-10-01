
//--------- create file ---------------
var fs=require("fs");
fs.writeFile("text.txt","hai how are you editted",(err)=>{
    if(err){
        console.log("unable to write");
    }
})

//------- append to file ------------
// var fs=require("fs");
// fs.appendFile("text.txt","more content added",(err)=>{
//     if(err){
//         console.log("unable to write");
//     }
// })

//---------- read file --------
// var fs=require("fs");
// fs.readFile("text.txt","utf8",(e,data)=>{
//     console.log(data);
// })

//------- ulink file ---------
// var fs=require("fs");
// fs.unlink("text.txt",(e)=>{
      
// })