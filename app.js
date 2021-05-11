// puls check
const express = require("express");

const app = express();

const port = 3000;

// q1
const fs = require("fs");

const axios = require("axios");

//q2
const readFile = ()=>{
    let content;
    fs.readFile("./data.txt",(err,data)=>{
        if (err) throw err;
        content =data.toString;
        console.log(content);
    });
}
readFile();

//q3
const writeFile= ()=>{
    fs.writeFile("text.txt","life is short",(err)=>{
        if(err) throw err;
        console.log("the text be saved");
    });
}
writeFile();

//q4 
const getPost = (id)=>{
    app.get('/',(req,res)=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts/id")
        .then((response)=>{
            //console.log(response.data);
            res.json(response.data)
        })
        .catch((err)=>{
            throw err;
        })
        
    })
};
getPost();

// q5 
const getPostAsync = async (data) => {
    try{
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        //console.log(response.data);
    } catch(err){
        throw err;
    }
  };
  getPostAsync();

  //practice 
  //q1 
  const appendToFile = (data) => {
    fs.appendFile("data.txt","third line",(err)=>{
       if (err) throw err;
        console.log('the "third line" was appended to file')
    })
  };
  appendToFile();

  //q2

// to sure that server work
app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})