import { NodeType, RootNode, ChildNode } from "./parser"




export function traverser(rootNode: RootNode) {
  //1.深度优先遍历

  //2 visitor

  function traverserArray(array: ChildNode[]) {
    array.forEach((node) => { })
  }

  function traverserNode(node: ChildNode | RootNode) {
    if (node.type == NodeType.Number) {

    } else if (node.type == NodeType.CallExpression) {
      traverserArray(node.params)
    }else if(node.type==NodeType.Program)
  }

  traverserNode(rootNode)
}