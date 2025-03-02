import { TreeNode } from '../../classes/TreeNode.js';
import { lowestCommonAncestor } from '../../problems/index.js';

test('check lowestCommonAncestor', () => {
  // Define tree
  const tree1 = new TreeNode(5);
  tree1.left = new TreeNode(12);
  tree1.right = new TreeNode(7);
  tree1.right.left = new TreeNode(-4);
  tree1.right.right = new TreeNode(-2);
  tree1.right.right.left = new TreeNode(13);
  tree1.right.right.right = new TreeNode(-23);
  
  expect((lowestCommonAncestor(tree1, -4, -2)).value).toBe(7);
  expect((lowestCommonAncestor(tree1, 12, -4)).value).toBe(5);
  expect((lowestCommonAncestor(tree1, 13, -23)).value).toBe(-2);
});

// To test individually
// npx jest -t "check lowestCommonAncestor"
