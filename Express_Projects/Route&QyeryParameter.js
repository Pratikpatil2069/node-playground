// Route Parameters in express.js are dynamic part of the url that can be accessed using (req.params).
//they are defined in the route path with colon (:),eg,/user/:id/view/:article where id is route parameter.
// you can access the value of route parameter via (req.params.id),(req.params.article) int route handler.
// Route parameters are used to capture values from url and pass them to route handler fro processing ,like user IDs ,product names,etc.
// Express automatically parses and makes the value available in (req.params) as an object where the parameter name is the key.  

// RouteParameter.js

import express from 'express';
const app=express();
app.get("/profile/:username",(req,res)=>{
    // when user enter on this parameter and send the request for opening account with name :username then we get this request in params object with json file.
    console.log(req.params);// this shows the json file key is username and value is "pratik";
    console.log(req.params.username)// the name "pratik" is dispalyed .
    // note :- all keys and values in params object is in the form of string.integer also.
});
app.get("/profile/:username/:id?",(req,res)=>{
   // in this url the 2 parameter are there but user want only username then get errro ,so handle this problem we use ?.
});
const PORT=3000;
app .listen(PORT,()=>{
    console.log("server starting on port 3000");
})

// Query parameter:
// ex:-https://www.youtube.com/watch?v=thapa&list=express&index=46 this is url.
// so in that url we access query paramerts using (req.query) it return the object like json formate (key - value);
// so the querry paramerts are is 1.thapa ,2.express, 3. 46 and seperate this using (&) symbole.

app.get('/watch', (req,res)=>{
    console.log(req.query);
})