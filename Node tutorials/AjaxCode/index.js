const express = require("express");
const app = express();

const  myXML = XMLHttpRequest();
        myXML.open("GET","__dirname+'/hello.html'","false"); file:///Users/varunbansal/Documents/Mern%20Stack%20training/Node%20tutorials/AjaxCode/hello.html
        myXML.send();
        








app.get("/" , function(req,res){
   res.sendFile("index.html"); 
});

// app.get("/data",function(req,res){
    
// });


app.listen(3000);