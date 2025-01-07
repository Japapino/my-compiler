const compiler = require("./compiler");
const input = `(add 2 (subtract 4 3))`;
const output = compiler(input);

console.log(JSON.stringify(output, null, 2));
