//EventEmitter:- it is a core module in node.js used to create and handle custom events.
// there are 2 main methods in EventEmitter Class.
// 1.emit(eventName, arg[]):-Triggers (fires) an event amd Passes data (arguments) to the listeners
//2.on(eventName, listener):-Registers (adds) a listener for a specific event. and The listener runs every time the event is emitted.

// import EventEmitter class
const EventEmitter=require('events');

//create instance.
const emitter= new EventEmitter();

//define an event listener
emitter.on("greet",(name,sirname)=>{
    console.log(name,sirname);
})
//trigger the greet enevt.
emitter.emit("greet","pratik","patil");


emitter.on("greet",(arg)=>{
    console.log(arg.name,arg.sirname);
})
emitter.emit("greet",{name:"pratik",sirname:"patil"});