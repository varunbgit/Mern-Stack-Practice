const express = require("express");
const app = express();

app.get("/" , function(req,res){
   res.sendFile("index.html"); 
});

// app.get("/data",function(req,res){
    
// });


app.listen(3000);