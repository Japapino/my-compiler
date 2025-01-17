const tokenizer = require("./tokenizer.js");
const parser = require("./parser.js");
const transformer = require("./transformer.js");

function compiler(input) {
  // 1. Lexical Analysis
  // Breaks the input code (string) into the basic syntax
  // of the language (array of objects)
  const tokens = tokenizer(input);
  // 2. Syntactic Analysis
  const lispAST = parser(tokens);
  // 3. Transformation
  const jsAST = transformer(lispAST);
  // 4. Code Generation

  return jsAST;
}

module.exports = compiler;
