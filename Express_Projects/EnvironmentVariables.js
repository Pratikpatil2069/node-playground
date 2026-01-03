// Environment varial are used to store configuration value like port number ,API keys, Database URls ,or secrete outside the codebase.
// you can acess environment variable  using process.env. Process is a global object available in node.js.
//we can store environment variable using four ways.
  // 1. using powershell :- $env:VARIABLE_NAME="value";
  // 2.using command prompt:-set VARIABLE_NAME=value;
  // 3.make .env file in your project folder and add varials.
  // 4. if you want to store permanently on windows then you can search "Environmental Varials" in window search.

// so we use 3 type so see bellow how it works:
    //.env file typically has environment variables in this syntax:Variable=value seperated ny new line.
    /*this file is not you will share with others as it includes sensitive information,
    so make sure to include it in .gitignore file. to let developer know which varial are needed ,  so you can include .env.example file with empty values.*/
    // we add "dev":"node --env-file=.env --watch EnvironmentVariables.js" this in json file in script
    // then run using npm run dev.
    import express from "express";
    
    const app=express();

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

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running at port :${PORT}`);
});
