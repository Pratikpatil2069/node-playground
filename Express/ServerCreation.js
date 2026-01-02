// Express is a minimal and flexible web application framework for nodes.js based on http module.
//in simplifies routing,middleware and handling http request in node.js application.
//Alternatives: fastify,nest.js.koa,hono,elysia.js
// use npm install express command to install express.js.

import express from "express";

const app=express();

app.get('/',(req,res)=>res.send("hello world"));

app.get("/about",(req,res)=>res.send("<h1>Hello About Page</h1>"));

app.get("/table",(req,res)=>{
    return res.send(`<table border="2">
        <tr>
            <th colspan="2" rowspan="2">Student</th>
            <th colspan="4">Exam</th>
            <th colspan="4" >2nd Exam</th>
            <th colspan="2" rowspan="2">Final Grade</th>
        </tr>
        <tr>
            <td>Q1</td>
            <td>Q2</td>
            <td>Q3</td>
            <th rowspan="2">Grade</th>
            <td>Q1</td>
            <td>Q2</td>
            <td>Q3</td>
            <th rowspan="2">Grade</th>
        </tr>
        <tr>
            <th>code</th>
            <th>Name</th>
            <td>8</td>
            <td>7</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <th>NR</th>
            <th>R</th>
           
        </tr>
        <tr>
            <td>80549061</td>
            <td>john</td>
            <td>70%</td>
            <td>100%</td>
            <td>100%</td>
            <td>17.6</td>
            <td colspan="4"></td>
            <td>17.6</td>
            <td>18</td>
        </tr>
         <tr>
            <td>80549062</td>
            <td>Mary</td>
            <td>10%</td>
            <td>50%</td>
            <td>50%</td>
            <td>6.8</td>
            <td >100%</td>
            <td>100%</td>
            <td>50%</td>
            <td>16.5</td>
            <td>16.5</td>
            
            <td>17</td>
           
        </tr>
        <tr>
            <td>80549063</td>
            <td>Claire</td>
            <td colspan="4"></td>
            <td>50%</td>
            <td>50%</td>
            <td>50%</td>
            <td >10.0</td>
            <td>10.0</td>
            <td>10</td>
           

        </tr>
       
    </table>`)
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at port :${PORT}`);
});
