const add=(a,b)=>{
    return a+b;
}
const mult=(a,b)=>{
    return a*b;
}
const pi=3.14;
// module.exports=add;
// module.exports=mult; //this last export overlap all the above exports.

// 1st methode.
module .exports={add,mult,pi}; // note: the name add and mult is same to where you exports.