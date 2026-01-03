
const EventEmitter=require('events');
const emitter=new EventEmitter();

 const count={
    "log-in":0,
    "log-out":0,
    "update":0
};

emitter.on("log-in",(name)=>{
    count['log-in']++;
    console.log(name);
});

emitter.on("log-out",(name)=>{
    count['log-out']++;
    console.log(name);
});

emitter.on("update",(name )=>{
    count.update++;
    console.log(`pratik to ${name}`);
});

emitter.on("count",( )=>{
    console.log(count);
});

emitter.emit("log-in","pratik");
emitter.emit("log-out","pratik");
emitter.emit("update","kartik");

emitter.emit("count");


