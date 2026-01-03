//Asyncronomous:-means tasks performs at a time like reading a file and do another tasks at that time .

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// required for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// file path
const filePath = path.join(__dirname, "test.txt");

console.log("first");

// write file (sync)
const writeFile1=fs.writeFile(filePath,"i am async","utf-8",(err)=>{if(err){console.error(err)}else{console.log("save")}});
fs.readFile(filePath,'utf-8',(err, data)=>{if(err)console.error(err);else console.log(data)});


console.log("third");

// append file (sync)
fs.appendFile(filePath,"this is append data",'utf-8',(err)=>{if(err)console.error(err);else console.log("data is update")});


console.log("fifth");
