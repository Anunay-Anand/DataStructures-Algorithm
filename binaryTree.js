// 1) Preorder traversal

// Recursive Solution

const preorderTraversalRecursive = (root) => {
  // Create a result array
  let result = [];
  preOrder(root);
  // Result is automatically passed using the concept of lexical scoping
  function preOrder(root) {
    // Check if node exist || root !== null
    if (root) {
      // Push into result
      result.push(root.val);
      preOrder(root.left);
      preOrder(root.right);
    }
  }
  return result;
};

// Iterative solution

const preorderTraversalIterative = (root) => {
  // Defining the result identifier array
  const result = [];
  // Stack to store untraversed elements
  const stack = [];
  // Loop
  while (root !== null || stack.length !== 0) {
    if (root === null) {
      root = stack.pop();
    }
    result.push(root.val);
    if (root.right) {
      stack.push(root.right);
    }
    root = root.left;
  }
  return result;
};

// 2) InOrder Traversal

// Recursive Solution

const inorderTraversalRecursive = (root) => {
  // define an array identifier
  const result = [];
  inOrder(root);

  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  }
  return result;
};

// Iterative Solution

const inorderTraversalIterative = (root) => {
  const result = [];
  const stack = [];
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};

// 3) PostOrder traversal

// Recursive Approach

const postorderTraversalRecursive = (root) => {
  // Define an Identifier Result
  const result = [];
  postOrder(root);

  function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    result.push(root.val);
  }
  return result;
};

// Iterative
const postorderTraversalIterative = (root) => {
  // Define an Identifier Result
  const result = [];
  const stack = [root];

  while (stack.length !== 0) {
    let root = stack.pop();
    result.push(root.val);
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      stack.push(root.left);
    }

    return result;
  }
};

// 4) Maximum Depth of Binary Tree

const maxDepth = (root) => {
  // Check for edge case (no root)
  if (!root) return 0;
  // Now recursively traverse both the left and right subtree
  let leftTree = maxDepth(root.left);
  let rightTree = maxDepth(root.right);
  // Now compare both to find Max
  return Math.max(leftTree + 1, rightTree + 1);
};

// 5) Maximum Depth of N-ary Tree (Can have n number of child nodes)

const maxDepthNAry = (root) => {
  // Check for edge cases (when no root)
  if (!root) return 0;
  // Let the initial answer be 0 for each root node
  let ans = 0;
  // Loop over each node
  for (let x of root.children) {
    ans = Math.max(ans, maxDepth(x));
  }
  return ans + 1;
};

// 6) Merge Binary Trees

const mergeTrees = (root1, root2) => {
  // Check if both don't exist (edge case)
  if (!root1 && !root2) return null;
  // Check if either exist at that node (simply return)
  if (!root1 || !root2) return root1 || root2;
  // Summation of node
  root1.val += root2.val;
  // Now traverse left and then right in sequence
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

// 7) IsUniversal Tree

const isUnivalTree = (root) => {
  // Define Identifier value and store the root value
  let value = root.val;
  function checkIfTrue(root) {
    if (!root) return true;
    let leftNode = checkIfTrue(root.left);
    let rightNode = checkIfTrue(root.right);
    return leftNode && rightNode && root.val === value;
  }
  // Call the function to check if true
  return checkIfTrue(root);
};

// 8) Compare Leaves

const leafSimilar = (root1, root2) => {
  const leaves1 = [];
  const leaves2 = [];
  function checkForLeaves(root, leaves) {
    if (!root) return;
    checkForLeaves(root.left, leaves);
    checkForLeaves(root.right, leaves);
    if (!root.left && !root.right) {
      leaves.push(root.val);
    }
  }
  // Find all the leaves for tree 1
  checkForLeaves(root1, leaves1);
  checkForLeaves(root2, leaves2);
  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }
  return true;
};

// 9) Count left Leaves only

// O(n) & O(n) solution

const sumOfLeftLeaves = (root) => {
  // In case there is no left or right
  if (!root.left && !root.right) {
    return 0;
  }
  // Declare identifiers
  let leaves = [];
  function countLeftLeaves(root, leaves, toCount) {
    if (!root) {
      return;
    }
    countLeftLeaves(root.left, leaves, true);
    countLeftLeaves(root.right, leaves, false);
    if (!root.left && !root.right && toCount) {
      leaves.push(root.val);
      return;
    }
  }
  countLeftLeaves(root, leaves, true);
  let sum = 0;
  for (let x of leaves) {
    sum += x;
  }
  return sum;
};

// O(n) solution

const sumOfLeftLeaves = (root) => {
  // Check if no left and right
  if (!root.left && !root.right) {
    return 0;
  }
  // Calculate the sum
  let sum = 0;
  let isLeft = true;
  function countLeftLeaves(root, isLeft) {
    if (!root) return;
    countLeftLeaves(root.left, true);
    countLeftLeaves(root.right, false);
    if (!root.left && !root.right && isLeft) {
      sum = sum + root.val;
      return;
    }
  }
  countLeftLeaves(root, isLeft);
  return sum;
};
