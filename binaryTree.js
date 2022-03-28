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

const sumOfLeftLeavesBest = (root) => {
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

// 10) Check if both tree are same

const isSameTree = (p, q) => {
  // Check for edge cases
  if (!p && !q) return true;
  if (!p || !q) return false;
  // function to count tree
  function countTree(root, tree) {
    if (!root) {
      tree.push(null);
      return;
    }
    countTree(root.left, tree);
    countTree(root.right, tree);
    // Add the elements to array tree
    tree.push(root.val);
  }
  let tree1 = [];
  let tree2 = [];
  countTree(p, tree1);
  countTree(q, tree2);
  // Check if same
  if (tree1.length !== tree2.length) return false;
  for (let i = 0; i < tree1.length; i++) {
    if (tree1[i] !== tree2[i]) return false;
  }
  return true;
};

// 11) Invert Binary Tree

const invertTree = (root) => {
  if (!root) return root;
  function invert(root) {
    if (!root) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
  }
  return invert(root);
};

// 12) Univalued longest path

const longestUnivaluePath = (root) => {
  // Check for edge case
  if (!root) return 0;
  // Defining identifiers required. Max for storing result
  let max = 0;
  // To recursively calculate the length of left and right subtree
  let left = 0,
    right = 0;
  // function for finding the path
  function longestPath(root) {
    // base condition to break the stack
    if (!root) {
      return 0;
    }
    // Recursively call left and right
    left = longestPath(root.left);
    right = longestPath(root.right);
    // Check if univalued path or not
    if (!root.left || root.left.val !== root.val) {
      left = 0;
    }
    if (!root.right || root.right.val !== root.val) {
      right = 0;
    }
    // Find the new max
    max = Math.max(max, left + right);
    // Sending back the highest of left or right if there.. +1 in case they match
    return Math.max(left, right) + 1;
  }
  longestPath(root);
  return max;
};

// 13) Cousins in Binary Tree

const isCousins = (root, x, y) => {
  let left = [];
  let right = [];
  let depth = -1;
  function checkSibling(root, x, y, depth) {
    if (!root) return;
    depth++;
    checkSibling(root.left, x, y, depth);
    checkSibling(root.right, x, y, depth);
    // Check the parent and depth
    if (root.left) {
      if (root.left.val === x) {
        left.push(root.val, depth);
      } else if (root.left.val === y) {
        right.push(root.val, depth);
      }
    }
    if (root.right) {
      if (root.right.val === x) {
        left.push(root.val, depth);
      } else if (root.right.val === y) {
        right.push(root.val, depth);
      }
    }
    return;
  }
  checkSibling(root, x, y, depth);
  return left[0] !== right[0] && left[1] === right[1] ? true : false;
};

//14) Find the right view of the tree

function rightView(root) {
  // Define the identifiers required
  let level = 0;
  let result = [];
  function findView(root, level) {
    // If there is no root/node
    if (!root) {
      return null;
    }
    // Check if first node on this level
    if (level === result.length) {
      result.push(root.data);
    }
    // Traverse to right first
    findView(root.right, level + 1);
    findView(root.left, level + 1);
  }
  findView(root, level);
  return result;
}

// 15) Top View

function  topView(root)
{
// Declare and Initiate identifiers required
// We will first create a queue for level order traversing
let queue = [];
let ans = [];

// Check for edge cases
if (!root) return ans;

// A map to find the top view
let topElements = {};
// push first level in form of [root, vertical level/ line (initially 0)]
queue.push([root, 0]);
// Loop until the end of queue
while (queue.length > 0) {
// find the top most node (first element pushed = arr[0])
let top = queue[0];
// Now pop the element
queue.shift();
// Find the node value and line number using array destructuring
let node = top[0];
let lineNumber = top[1];
// Check if an element on the same line number already exist on map or store it
if (!topElements[lineNumber]) {
  topElements[lineNumber] = node;
}
// Now push whatever is on the left of current root to queue
if (node.left) {
  queue.push([node.left, lineNumber - 1]);
}
// Now push whatever is on the right of current root to queue
if (node.right) {
  queue.push([node.right, lineNumber + 1]);
}
}

// Get the object keys and sort them in order
let keys = Object.keys(topElements).sort((a,b) => a - b);

// Now fill the answer array
for(let i = 0; i < keys.length; i++) {
    // Now store in right way
    ans.push(topElements[keys[i]].data);
} 
return ans;
}

// 16) Pre, Inorder and postOrder

const rightSideView = (root) => {
  // Check for edge case - no pre, in or post order
  if (!root) return [];

  // Declare and initiate identifiers required to store results
  let inOrder = [];
  let preOrder = [];
  let postOrder = [];

  // Defining stack required to store node on traversals [node, (order no)]
  let stack = [];

  // Insert root Node with order No 1 for preOrder
  stack.push({ node: root, orderNumber: 1 });

  while (stack.length > 0) {
    // Select node from top
    let currNode = stack[stack.length - 1];
    stack.pop();

    // If part of preOrder
    // Increment 1 to 2 and push the left side of tree
    if (currNode.orderNumber === 1) {
      preOrder.push(currNode.node.val);
      currNode.orderNumber++;
      stack.push({ node: currNode.node, orderNumber: currNode.orderNumber });
      // push if left exist
      if (currNode.node.left !== null) {
        stack.push({ node: currNode.node.left, orderNumber: 1 });
      }
    } else if (currNode.orderNumber === 2) {
      inOrder.push(currNode.node.val);
      currNode.orderNumber++;
      stack.push({ node: currNode.node, orderNumber: currNode.orderNumber });

      // Check if node left available
      if (currNode.node.right !== null) {
        stack.push({ node: currNode.node.right, orderNumber: 1 });
      }
    } else {
      postOrder.push(currNode.node.val);
    }
  }

  return [preOrder, inOrder, postOrder];
};
