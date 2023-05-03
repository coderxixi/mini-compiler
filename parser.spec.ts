import {test,expect} from "vitest";
import { parser, NodeType } from "./parser";
import { TokenTYpes }  from "./tokenizer"
test('parser',()=>{
  //语法分析
  const tokens = [
   
    { type: TokenTYpes.Number, value: '2' },
    { type: TokenTYpes.Paren, value: '(' },
    { type: TokenTYpes.Name, value: 'subtract' },
    { type: TokenTYpes.Number, value: '4' },
    { type: TokenTYpes.Number, value: '2' },
    { type: TokenTYpes.Paren, value: ')' },
    { type: TokenTYpes.Paren, value: ')' }
  ]; 

  const ast={
    type: NodeType.Root,
    body:[
      {
        type:NodeType.CallExpression,
        name:"add",
        params:[
          {
            type:NodeType.Number,
            value:"2"
          },
          {
            type: NodeType.CallExpression,
            value: "subtract",
            params:[
              {
                type: NodeType.Number,
                value:"4"
              },
              {
                type: NodeType.Number,
                value: "2"
              }
             
            ]
          }
        ]
      }
    ]
  }

  expect(parser(tokens)).toEqual(ast)
})


test("number",()=>{
  const tokens=[
    { type: TokenTYpes.Number, value: '2' },
  ];
  const ast={
    type: NodeType.Root,
    body:[
      {
        type:NodeType.Number,
        value:2
      }
    ]
  }
  expect(parser(tokens)).toEqual(ast)

})
test("callExpression", () => {
  //语法分析
  const tokens = [
    { type: TokenTYpes.Paren, value: '(' },
    { type: TokenTYpes.Name, value: 'add' },
    { type: TokenTYpes.Number, value: '2' },
    { type: TokenTYpes.Number, value: '4' },
    { type: TokenTYpes.Paren, value: ')' },
  ];

  const ast = {
    type: NodeType.Root,
    body: [
      {
        type: NodeType.CallExpression,
        name: "add",
        params: [
          {
            type:NodeType.Number,
            value: "2"
          },
          {
            type: NodeType.Number,
            value: "4"
          },
        
        ]
      }
    ]
  }
  expect(parser(tokens)).toEqual(ast)
})

