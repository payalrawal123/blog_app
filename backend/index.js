const express = require("express");

const app = express();

app.listen(8080,(req,res)=>{
    console.log("Server run at port 8080");
})