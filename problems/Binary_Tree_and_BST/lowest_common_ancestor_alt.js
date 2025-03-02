import { TreeNode} from '../../classes/TreeNode.js';

// Find the lowest common ancestor (LCA) of two nodes within a binary tree
// This version returns null if only one of the two that were searched for was found

export function lowestCommonAncestorAlt(node, lookupValue1, lookupValue2) {
  function helper(node) {
    if (node == null) {
      return { foundNodes: 0, lca: null };
    }

    let left = helper(node.left);
    let right = helper(node.right);

    let foundNodes =
      left.foundNodes + right.foundNodes +
      (node.value === lookupValue1 ? 1 : 0) +
      (node.value === lookupValue2 ? 1 : 0);

    // ✅ If exactly 2 nodes are found and LCA not already determined, set it
    if (foundNodes === 2 && !left.lcaFound && !right.lcaFound) {
      return { foundNodes, lca: node, lcaFound: true };
    }

    // ✅ If LCA has already been determined, propagate the result
    if (left.lcaFound) return left;

    if (right.lcaFound) return right;

    // console.log(`Visiting Node: ${node.value}, FoundNodes: ${foundNodes}`);

    // ✅ If only one of the nodes is found, propagate foundNodes but no LCA
    return { foundNodes, lca: left.lca || right.lca, lcaFound: false };
  }

  const result = helper(node);

  return result.foundNodes === 2 ? result.lca : null;
}


// Manual testing

// Define tree
// const tree = new TreeNode(25);
// tree.left = new TreeNode(-8);
// tree.right = new TreeNode(14);
// tree.left.right = new TreeNode(33);
// tree.right.left = new TreeNode(-9);

// Define tree
// const tree1 = new TreeNode(5);
// tree1.left = new TreeNode(12);
// tree1.right = new TreeNode(7);
// tree1.right.left = new TreeNode(-4);
// tree1.right.right = new TreeNode(-2);
// tree1.right.right.left = new TreeNode(13);
// tree1.right.right.right = new TreeNode(-23);

// Function calls
// const lca1 = lowestCommonAncestorAlt(tree, 33, -9);
// console.log('LCA:', lca1 ? lca1.value : 'Not found');  // 25

// const lca2 = lowestCommonAncestorAlt(tree, 33, -91);
// console.log('LCA:', lca2 ? lca2.value : 'Not found');  // Not found

// const lca3 = lowestCommonAncestorAlt(tree1, -4, -2);
// console.log('LCA:', lca3 ? lca3.value : 'Not found');  // 7

// const lca4 = lowestCommonAncestorAlt(tree1, 13, -23);
// console.log('LCA:', lca4 ? lca4.value : 'Not found');  // -2