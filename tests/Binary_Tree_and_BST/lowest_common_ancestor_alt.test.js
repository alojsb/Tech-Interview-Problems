import { TreeNode } from '../../classes/TreeNode.js';
import { lowestCommonAncestorAlt } from '../../problems/index.js';

test('check alternative lowestCommonAncestor', () => {
  // Define tree
  const tree1 = new TreeNode(5);
  tree1.left = new TreeNode(12);
  tree1.right = new TreeNode(7);
  tree1.right.left = new TreeNode(-4);
  tree1.right.right = new TreeNode(-2);
  tree1.right.right.left = new TreeNode(13);
  tree1.right.right.right = new TreeNode(-23);
  
  expect((lowestCommonAncestorAlt(tree1, -4, -2)).value).toBe(7);
  expect((lowestCommonAncestorAlt(tree1, 12, -4)).value).toBe(5);
  expect((lowestCommonAncestorAlt(tree1, 13, -23)).value).toBe(-2);
});

// To test individually
// npx jest -t "check alternative lowestCommonAncestor"
