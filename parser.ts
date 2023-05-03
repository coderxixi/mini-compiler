import { Token, TokenTYpes } from "./tokenizer"
export enum NodeType {
  Root,
  Number, CallExpression
}

type ChildNode = NumberNode | CallExpressionNode
interface Node {
  type: NodeType
}
interface RootNode extends Node {
  body: ChildNode[]
}

interface NumberNode extends Node {
  value: string
}
interface CallExpressionNode extends Node {
  name: string,
  params: ChildNode[]
}

function createRootNode(): RootNode {
  return {
    type: NodeType.Root,
    body: []
  }
}
function createNumberNode(token: string): NumberNode {
  return {
    type: NodeType.Number,
    value: token
  }
}

function createCallExpressionNode(name: string): CallExpressionNode{
  return {
    type: NodeType.CallExpression,
    name: name,
    params: []
  }
}

export function parser(tokens: Token[]) {
  let current = 0;
  const rootNode = createRootNode()

  function walk() {
    let token = tokens[current]
    if (token.type === TokenTYpes.Number) {
      // rootNode.body.push(createNumberNode(token.value))
      current++;
      return createNumberNode(token.value)
    }

    //判断是否是表达式
    if (token.type == TokenTYpes.Paren && token.value == "(") {
      token = tokens[++current]
      const node = createCallExpressionNode(token.value)
      token = tokens[++current];
      while (!(token.type == TokenTYpes.Paren && token.value == ")")) {
          node.params.push(walk());
          token = tokens[current]
      }
      current++;
      return node
    }
    throw new Error(`不认识的token ${token}`)
  }

  while(current<tokens.length){
    rootNode.body.push(walk())
  }
  return rootNode
}

