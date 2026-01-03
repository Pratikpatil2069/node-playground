const path=require("path");// path is a built-in module.

// this are fun in path module.
console.log(__dirname);// this give the current directory path where you write code.
console.log(__filename);// this give the current file path where you write code.
console.log(path.parse("D:\MERN-STACK\Backend\node-playground\Module\Path_Module.js"));
console.log(path.resolve("D:\MERN-STACK\Backend\node-playground\Module\Path_Module.js"));
console.log(path.extname("D:\MERN-STACK\Backend\node-playground\Module\Path_Module.js"));
console.log(path.basename("D:\MERN-STACK\Backend\node-playground\Module\Path_Module.js"));
console.log(path.dirname("D:\MERN-STACK\Backend\node-playground\Module\Path_Module.js"));

const filePath=path.join("pratik","patil","the.coder");
console.log(filePath);