import { test,expect } from "vitest"
import { tokenizer, TokenTYpes } from "./tokenizer"

test.skip('tokenizer', () => {
  const code = `(add 2(subtract 4 2))`;
  const tokens = [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '2' },
    { type: 'paren', value: '(' },
    { type: 'name', value: 'subtract' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
    { type: 'paren', value: ')' }
  ];
  expect(tokenizer(code)).toEqual(tokens)
})

test('paren',()=>{
   const code = `(`;
  const tokens = [
    { type: TokenTYpes.Paren, value: '(' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})


test('add',()=>{
   const code = `add`;
  const tokens = [
    { type: TokenTYpes.Name, value: 'add' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})

test('number',()=>{
   const code = `123`;
  const tokens = [
    { type: TokenTYpes.Number, value: '123' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})