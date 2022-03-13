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

const postorderTraversal = (root) => {
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
