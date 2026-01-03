import fs from "fs";
import readline from "readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation=()=>{
    rl.question("enter the file name:",(filename)=>{
        rl.question("enter  the file content:",(content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.error("error in writing the file:");
                }else{
                    console.log("file created successfully!");
                }
                rl.close();
            })

            
        })
    })
}
fileCreation();