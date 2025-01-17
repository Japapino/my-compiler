const compiler = require("./compiler");
const input = `(add 2 (subtract 4 3))`; // string of our Lisp code to compile into JS
const output = compiler(input);

console.log("--- RESULT ----");
console.log(JSON.stringify(output, null, 2));
