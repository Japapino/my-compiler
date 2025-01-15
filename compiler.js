const tokenizer = require("./tokenizer.js");
const parser = require("./parser.js");

function compiler(input) {
  // 1. Lexical Analysis
  // Breaks the input code (string) into the basic syntax
  // of the language (array of objects)
  const tokens = tokenizer(input);
  const lispAST = parser(tokens);
  // 2. Syntactic Analysis
  // 3. Transformation
  // 4. Code Generation

  return lispAST;
}

module.exports = compiler;
