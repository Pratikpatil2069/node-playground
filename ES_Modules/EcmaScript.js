// ES Modules (ECMAScript Modules) allows you to use import and export syntax. instead of require and module.exports.
// To use ES Modules you can name your file with the .mjs extension
// or set type:"module" in package.json

import mult,{add} from "./math.js";

console.log(mult(47,20));
console.log(add(50,20));