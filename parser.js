module.exports = function parser(tokens) {
  let current = 0;

  // #region walk
  function walk() {
    let token = tokens[current];

    if (token.type === "number") {
      current++;
      return {
        type: "numberLiteral",
        value: token.value,
      };
    }
    if (token.type === "paren" && token.value == "(") {
      token = tokens[++current]; // pre-increment to skip the open paren and get the name from the next token

      const expression = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };

      token = tokens[++current];

      while (token.value !== ")") {
        expression.params.push(walk());
        token = tokens[current];
      }

      current++;
      return expression;
    }
    throw new TypeError("Unknown token: `${toekn}`");
  }
  // #endregion walk

  const ast = {
    type: "Program",
    body: [walk()],
  };

  return ast;
};
