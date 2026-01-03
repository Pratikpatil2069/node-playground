// const add=require("./Export");
// const mult=require("./Export");

// 1st meth.
const {add,mult,pi}=require("./Export");

console.log(add(10,20));
console.log(mult(10,20));
console.log(pi);

// 2nd meth.
const math=require ("./Export");
console.log(math.add(10,20));
console.log(math.mult(10,20));
console.log(math.pi);
