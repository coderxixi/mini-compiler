export enum TokenTYpes {
  Paren,
  Name,
  Number,
}
interface Token {
  type: TokenTYpes,
  value: string
}
export function tokenizer(code: string) {
  const tokens: Token[] = [];
  let current = 0;
  while (current<code.length){
    let char = code[current];
    const WHITESPACE = /\s/i;
    if (WHITESPACE.test(char)) {
      current++;
      continue
    }
    if (char == "(") {
      tokens.push({
        type: TokenTYpes.Paren,
        value: char
      })
      current++;
      continue
    }
    if (char == ")") {
      tokens.push({
        type: TokenTYpes.Paren,
        value: char
      })
      current++;
      continue
    }

    const LETTERS = /[a-z]/i;

    if (LETTERS.test(char)) {
      let value = '';
      while (LETTERS.test(char) && current < code.length) {
        value += char
        char = code[++current];
      }
      tokens.push({
        type: TokenTYpes.Name,
        value
      })
    }


    const NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';
      while (NUMBERS.test(char) && current < code.length) {
        value += char
        char = code[++current];

      }
      tokens.push({
        type: TokenTYpes.Number,
        value
      })
    }
   
  }
  return tokens
 
}