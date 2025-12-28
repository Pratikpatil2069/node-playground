// synchronous: tasks run one after another (blocking)

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
fs.writeFileSync(filePath, "this is the file data", "utf-8");
console.log("second - file written");

console.log("third");

// append file (sync)
fs.appendFileSync(filePath, "\nthis is append data", "utf-8");
console.log("fourth - data appended");

console.log("fifth");
