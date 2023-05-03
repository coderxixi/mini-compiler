export enum TokenTYpes {
  Paren,
  Name,
  Number
}




interface Token {
  type: TokenTYpes,
  value: string
}
export function tokenizer(code: string) {
  const tokens: Token[] = [];
  let current = 0;
  let char = code[current];
  if (char == "(") {
    tokens.push({
      type: TokenTYpes.Paren,
      value: char
    })
  }

  const LETTERS=/[a-z]/i;
  if(LETTERS.test(char)){
    let value='';
     while(LETTERS.test(char)&&current<code.length){
       value+=char
      char=code[++current];
     
     }
      tokens.push({
      type: TokenTYpes.Name,
      value
    })
  }


  const NUMBERS=/[0-9]/;
   if(NUMBERS.test(char)){
    let value='';
     while(NUMBERS.test(char)&&current<code.length){
       value+=char
      char=code[++current];
     
     }
      tokens.push({
      type: TokenTYpes.Number,
      value
    })
  }
  return tokens
}