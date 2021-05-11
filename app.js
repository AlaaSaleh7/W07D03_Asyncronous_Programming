const express = require("express");

const app = express();

const port = 3000;

const fs = require("fs");

const axios = require("axios");

const readFile = ()=>{
    let content;
    fs.readFile("data.txt",(err,data)=>{
        if (err) throw err;
        content =data.toString;
        console.log(content);
    })
}
// to sure that server done
app.get("/",(req,res)=>{
    res.send ("hello");
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})