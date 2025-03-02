import { TreeNode } from '../../classes/TreeNode.js';
import { maximumDepth } from '../../problems/index.js';

test('check maximumDepth', () => { 

  // Construct binary tree for testing
  const testTree1 = new TreeNode(44);
  testTree1.left = new TreeNode(8);
  testTree1.right = new TreeNode(15);
  testTree1.left.left = new TreeNode(2);
  testTree1.right.left = new TreeNode(4);
  testTree1.right.right = new TreeNode(-11);
  testTree1.right.right.left = new TreeNode(1);
  testTree1.right.right.left.left = new TreeNode(17);
  testTree1.right.right.left.left.left = new TreeNode(25);

  // Construct another tree
  const testTree2 = new TreeNode(5);
  testTree2.left = new TreeNode(12);
  testTree2.right = new TreeNode(7);
  testTree2.right.left = new TreeNode(-4);
  testTree2.right.right = new TreeNode(-2);
  testTree2.right.right.left = new TreeNode(13);

  // Construct yet another tree
  const testTree3 = new TreeNode(9);

  expect(maximumDepth(testTree1)).toBe(6);
  expect(maximumDepth(testTree2)).toBe(4);
  expect(maximumDepth(testTree3)).toBe(1);
});

// To test individually
// npx jest -t "check maximumDepth"
