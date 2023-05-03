import { test, expect } from "vitest"
import { tokenizer, TokenTYpes } from "./tokenizer"

test('tokenizer', () => {
  const code = `(add 2(subtract 4 2))`;
  const tokens = [
    { type: TokenTYpes.Paren, value: '(' },
    { type: TokenTYpes.Name, value: 'add' },
    { type: TokenTYpes.Number, value: '2' },
    { type: TokenTYpes.Paren, value: '(' },
    { type: TokenTYpes.Name, value: 'subtract' },
    { type: TokenTYpes.Number, value: '4' },
    { type: TokenTYpes.Number, value: '2' },
    { type: TokenTYpes.Paren, value: ')' },
    { type: TokenTYpes.Paren, value: ')' }
  ];
  expect(tokenizer(code)).toEqual(tokens)
})

test('left paren', () => {
  const code = `(`;
  const tokens = [
    { type: TokenTYpes.Paren, value: '(' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})


test('right paren', () => {
  const code = `)`;
  const tokens = [
    { type: TokenTYpes.Paren, value: ')' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})

test('number', () => {
  const code = `123`;
  const tokens = [
    { type: TokenTYpes.Number, value: '123' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})

test('(add 1 2)', () => {
  const code = `(add 1 2)`;
  const tokens = [
    { type: TokenTYpes.Paren, value: '(' },
    { type: TokenTYpes.Name, value: 'add' },
    { type: TokenTYpes.Number, value: '1' },
    { type: TokenTYpes.Number, value: '2' },
    { type: TokenTYpes.Paren, value: ')' },
  ];
  expect(tokenizer(code)).toEqual(tokens)
})