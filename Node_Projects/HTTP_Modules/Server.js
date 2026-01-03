// Http Module:-1. node.js allows developers to create an Http server and handle client request and server responses.
              //2. it provides methods and properties to work with HTTP request and responses.
              //3. used to creation of REST APIs,web pages and many more.

// web server:-1. it is software or hardware that serves web content(HTML,CSS,JavaScript) to client over the internet.
             //2.it uses protocals like HTTP/HTTPS to handle requests and responses.

const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.write("<h1>i am pratik!</h1>");
        res.end();
    }

     if(req.url==="/About"){
        res.write("i am mern stack developer!!!");
        res.end();
    }

     if(req.url==="/Contact"){
        res.write("contact on linkedIn!!!");
        res.end();
    }
});

const port=3000;
server.listen(port,()=>{
    console.log(`listening on port ${port}`);
});