var i=0;
var x= setInterval(()=>{
    console.log(i);
    i++;
    if(i==10){
        clearInterval(x)
    }
        
},3000)