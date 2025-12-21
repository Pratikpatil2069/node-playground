//this is syncronomous methods.
// syncronomous: means the tasks do one after another like first read the file and then do next tasks.
// create and add the data in file.
const { error } = require("console");
const fs=require("fs");
const path=require("path");
const fileName="test.txt";
const filePath=path.join(__dirname, fileName);
console.log(__filename);
const writeFile=fs.writeFileSync(filePath , "this is the file data", "utf-8");
console.log(writeFile);

// append data to a file.
// if file is does not exit then it create and append.
const append=fs.appendFileSync(filePath,"\nthis is append data","utf-8");

// delete the file.
//const deleteFile= fs.unlinkSync(filePath);

// there are many methods of file.




// Asyncronomous methods.
// Asyncronomous:-means tasks performs at a time like reading a file and do another tasks at that time .
// write a file.
//const writeFile1=fs.writeFile(filePath,"i am async","utf-8",(err)=>{if(err){console.error(err)}else{console.log("save")}});

// Read a file.
//fs.readFile(filePath,'utf-8',(err, data)=>{if(err)console.error(err);else console.log(data)});

// Append a data.
//fs.appendFile(filePath,"this is append data",'utf-8',(err)=>{if(err)console.error(err);else console.log("data is update")});

// there many methods of file.




// promises methods.
// read files in directory.
const filePath1=path.join(__dirname);
fs.promises.readdir(filePath1).then((data)=>{console.log(data)}).catch((err)=>{console.error(err)});
// write file.
fs.promises.writeFile(filePath,"i am promises","utf-8").then(()=>{console.log("successful")}).catch((err)=>{console.error(err)});
// and many more..




// Async/Await methods.

const readFile= async()=>{
    try{
        const res=await fs.readdir(filePath1);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
readFile();
