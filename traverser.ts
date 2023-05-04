import { NodeType, RootNode, type ChildNode } from "./parser"

interface Visitor {
  Program?:{
    enter:()=>void,
    exit:()=>void
  },
  CallExpression?:{
    enter:()=>void,
    exit:()=>void,
  },
  NumberLiteral?:{
    enter: () => void,
    exit: () => void,
  }
}


export function traverser(rootNode: RootNode,visitor:Visitor) {
  //1.深度优先搜索

  //2 visitor

  function traverserArray(array: ChildNode[]) {
    array.forEach((node) => {
      traverserNode(node)
    })
  }

  function traverserNode(node: RootNode | ChildNode) {
    // if (node.type == NodeType.NumberLiteral) {

    // } else if (node.type == NodeType.CallExpression) {
    //   traverserArray(node.params)
    // }else if(node.type==NodeType.Program){

    // }
    switch (node.type) {
      case NodeType.NumberLiteral:
        break;
      case NodeType.CallExpression:
        traverserArray(node.params);
        break;
      case NodeType.Program:
        traverserArray(node.body);
        break

    }
  }

  traverserNode(rootNode)
}