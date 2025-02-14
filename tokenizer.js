const LETTERS = /[a-z]/i;
const WHITESPACE = /\s/;
const NUMBERS = /\d/;

function tokenizer(input) {
  const tokens = [];

  let current = 0;
  while (current < input.length) {
    let char = input[current];
    if (["(", ")"].includes(char)) {
      tokens.push({ type: "paren", value: char });
      current++;
      continue;
    }

    if (LETTERS.test(char)) {
      let value = "";

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: "name", value: value });
      continue;
    }

    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    if (NUMBERS.test(char)) {
      let value = "";

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: "number", value: value });
      continue;
    }

    throw new TypeError(`Unknown char: '${char}'`);
  }

  return tokens;
}

module.exports = tokenizer;
