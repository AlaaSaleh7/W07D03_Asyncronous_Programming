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
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response.data);
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
            `https://jsonplaceholder.typicode.com/${data}`
        );
        console.log(response.data);
    } catch(err){
        throw err;
    }
  };
  getPostAsync();

//-----------------------------------------------------------------------------

  //practice 

  //q1 
  const appendToFile = (data) => {
    fs.appendFile("data.txt",data,(err)=>{
       if (err) throw err;
        console.log(`the ${data} was appended to file`)
    })
  };
  appendToFile();
//--------------------------------------------------------------------------
  //q2
  const copyFile = (fileName) => {
    function callback(err) {
        if (err) throw err;
        console.log(`data.txt was copied to ${fileName}`);
      }
      // destination.txt will be created or overwritten by default.
      fs.copyFile('data.txt', fileName, callback);
      
      // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
      fs.copyFile('data.txt', fileName, fs.constants.COPYFILE_EXCL, callback);
  };
  copyFile();
//--------------------------------------------------------------------------
//q3
const newPost = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
  });
  
  const createPost = (post) => {
    // TODO: Your code here
  };
  createPost(newPost)
//--------------------------------------------------------------------------
//q4
const newPost = JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
  });
  
  const updatePost = (id, data) => {
    // TODO: Your code here
  };
  
  updatePost(1, newPost);
//--------------------------------------------------------------------------
//q5
const getUsers = async (id) => {
    try{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(response.data);
    } catch(err){
        throw err;
    }
  };
  getUsers();
  fetch( `https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(json => console.log(json))
//--------------------------------------------------------------------------
//q6
const saveUsers = () => {
    // TODO: Your code here
  };
  saveUsers();
//--------------------------------------------------------------------------
// to sure that server work
app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})