const tokenizer = require("./tokenizer.js");
const parser = require("./parser.js");
const transformer = require("./transformer.js");
const generateCode = require("./generateCode.js");

function compiler(input) {
  // 1. Lexical Analysis
  const tokens = tokenizer(input);
  // 2. Syntactic Analysis
  const lispAST = parser(tokens);
  // 3. Transformation
  const jsAST = transformer(lispAST);
  // 4. Code Generation
  const jsCode = generateCode(jsAST);

  return jsCode;
}

module.exports = compiler;
