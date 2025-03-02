// Find maximum depth of the binary tree

// Define a binary tree node class
export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Instantiate a binary tree
const root = new TreeNode(5);
root.left = new TreeNode(12);
root.right = new TreeNode(7);
root.right.left = new TreeNode(-4);
root.right.right = new TreeNode(-2);
root.right.right.left = new TreeNode(13);

// Traverse the binary tree and determine the depth
export function maximumDepth(node, level = 1) {
  if (node == null) {
    return 0;
  }

  console.log(`Value: ${node.value} is at level ${level}`);
  let leftLevel = maximumDepth(node.left, level + 1);
  let rightLevel = maximumDepth(node.right, level + 1);

  return 1 + Math.max(leftLevel, rightLevel);
}

// Manual testing
// console.log('Maximum depth: ' + maximumDepth(root));
