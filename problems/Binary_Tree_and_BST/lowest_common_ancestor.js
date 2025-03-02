import { TreeNode} from '../../classes/TreeNode.js';

// Find the lowest common ancestor (LCA) of two nodes within a binary tree
// This version returns the single node that was found of the two that were searched for

export function lowestCommonAncestor(node, lookupValue1, lookupValue2) {
  if (node == null) {
    return null;
  }

  // If any of the lookup values match the value in the node
  if (node.value === lookupValue1 || node.value === lookupValue2) {
    return node;
  }

  // Propagate the recursion to the children nodes
  let leftNode = lowestCommonAncestor(node.left, lookupValue1, lookupValue2);
  let rightNode = lowestCommonAncestor(node.right, lookupValue1, lookupValue2);

  // If both children return a node, current node is LCA
  if (leftNode && rightNode) {
    return node;
  }

  // Propagate found node or return null if neither is found
  return leftNode || rightNode;
}

// Manual testing

// Define tree
// const tree = new TreeNode(25);
// tree.left = new TreeNode(-8);
// tree.right = new TreeNode(14);
// tree.left.right = new TreeNode(33);
// tree.right.left = new TreeNode(-9);

// Function calls
// const lca1 = lowestCommonAncestor(tree, 33, -9);
// console.log('LCA:', lca1 ? lca1.value : 'Not found');  // 25

// const lca2 = lowestCommonAncestor(tree, 33, -91);
// console.log('LCA:', lca2 ? lca2.value : 'Not found');  // 33
