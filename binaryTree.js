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

function topView(root) {
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
  let keys = Object.keys(topElements).sort((a, b) => a - b);

  // Now fill the answer array
  for (let i = 0; i < keys.length; i++) {
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

// 17) Vertical traversal of a Tree

// This is a BFS Solution. TC - O(N*NLOGN*N) SC-O(N)

const verticalTraversal = (root) => {
  // check for edge case (in case no root)
  if (!root) return [];

  // Define the identifiers required for the solution
  // We need a queue for level order or Breadth First Search
  const queue = [];
  // We will store the traversed node in the list
  const list = [];

  // Initialize the queue with the root element.. pattern [node, row, col]
  // Our main criteria of difference is col
  queue.push([root, 0, 0]);

  // Loop until the queue is empty/ Entire tree traversed
  while (queue.length > 0) {
    // Select the current node, row and col for traversing and storing in list
    // arr.shift() method remove the element from start
    let [node, row, col] = queue.shift();

    // Check if left node exist... we decrement col to left
    if (node.left) {
      queue.push([node.left, row + 1, col - 1]);
    }

    // Check if right node exist.. We increment col to right
    if (node.right) {
      queue.push([node.right, row + 1, col + 1]);
    }

    // Push the current Node onto the list
    list.push([node.val, row, col]);
  }

  // Now sort the store nodes in the list are complete traversal of tree
  list.sort((a, b) => {
    // First compare their cols.. If they are in same col check row
    if (a[2] - b[2] === 0) {
      // We can also say a[2] === b[2] in same cols
      // Check their row.. If in the same row level we compare value
      if (a[1] - b[1] === 0) {
        // We can also say a[1] === b[1] in same rows
        return a[0] - b[0];
      }
    }
    return a[2] - b[2];
  });

  // Storing it onto a map as Map only take unique keys as well as O(1) Lookup being unordered
  const map = new Map();

  // Loop through the entire sorted list
  for (let i = 0; i < list.length; i++) {
    // get the currennt Node, col and it's row
    let [value, row, col] = list[i];

    // Check the map if col already exist and then simply push the value
    if (map.has(col)) {
      // Fetch the current col.. The value stored in col key which is an array of node values
      map.get(col).push(value);
    } else {
      map.set(col, [value]);
    }
  }
  // Since map.values() returns us an array and we spread it.. Thus returning format required with right sequence of nodes
  return [...map.values()];
};

// 18) Root to node Path

// Brute Force Solution TC - O(N) SC - O(N) in case we consider result array

function findPath(A, B) {
  // Check if empty tree
  if (!A) return [];

  // Define the identifiers required to solve the problem
  // Initialize it with root
  let path = [];

  // Define the recursive function to find path
  function findPath(A) {
    // Define the termination case
    if (!A) return 0;
    // Check if this is the target node
    if (A.data === B) {
      return 1;
    }
    // Traverse left and then right
    let left = findPath(A.left);
    let right = findPath(A.right);

    // Check if either left or right is 1
    if (left === 1) {
      path.push(A.left.data);
    }
    if (right === 1) {
      path.push(A.right.data);
    }
    return left || right;
  }
  findPath(A);
  path.push(A.data);
  path.reverse();
  return path;
}

// O(N) Optimized

function findPathOptimized(A, B) {
  // Check if empty tree
  if (!A) return [];

  // Define the identifiers required to solve the problem
  // Initialize it with root
  let path = [];

  // Define the recursive function to find path
  function findPath(A) {
    // Define the termination case
    if (!A) return 0;

    // Push the current Node val in path array
    path.push(A.data);

    // Check if this is the target node
    if (A.data === B) {
      return 1;
    }
    // Traverse left and then right
    let left = findPath(A.left);
    let right = findPath(A.right);

    // Check if both zero
    if (left === 0 && right === 0) {
      path.pop();
    }

    return left || right;
  }
  findPath(A);
  return path;
}

// 19) Morris Traversal Inorder
const inorderTraversal = (root) => {
  // Morris Traversal
  // Check for edge cases
  if (!root) return [];

  // define identifiers required
  let curr = root;
  let inorder = [];

  // Loop until curr is null/does not exist
  while (curr !== null) {
    // Check if there is no left to curr... i.e is root
    if (curr.left === null) {
      inorder.push(curr.val);
      // Move it to right
      curr = curr.right;
    } else {
      // If there is a left we need to store the root reference in prev identifier
      let prev = curr.left;
      // Now we will move as much right as possible to the prev.
      // prev must not point to curr which is the root of prev. i.e the overall root
      while (prev.right !== null && prev.right !== curr) {
        prev = prev.right;
      }
      // Check if reached end of right connect it to curr or root of the subtree
      if (prev.right === null) {
        prev.right = curr;
        // continue traversal
        curr = curr.left;
      } else {
        // Since the node was connected to root it was revisited so break it and push it
        prev.right = null;
        // push the root into inorder
        inorder.push(curr.val);
        curr = curr.right;
      }
    }
  }
  return inorder;
};

// 20) Binary Tree Level Order traversal... Both TC - O(N) SC - O(N)

// The solution where we reduce the while loop calls with for loop. We can differencitate the level of nodes

const widthOfBinaryTree = (root) => {
  // Define the condition for edge cases
  if (!root) return 0;

  // Declare and initiate the identifiers required
  const queue = []; // We define a queue for level order traversal.
  let min; // It stores the min index at each level
  let size; // The size of queue defines the number of node at each level
  let width = 0; // Finding the width

  // Push the first node onto the queue.. Root node. Form is [node, index]
  queue.push([root, 0]);

  // Now in order to do level order traversal loop until queue is empty
  while (queue.length > 0) {
    // get the size at each level.. On each traversal of while we traverse all nodes on a particular level
    size = queue.length;
    // Finding the min index for subtraction during push
    min = queue[0][1];
    // They store the first and last element at each level
    let first, last;
    // Loop over the all the nodes on the level
    for (let i = 0; i < size; i++) {
      // Get the curr node information
      let [node, currIdx] = queue.shift();
      // Decrease the currIdx by min. To ensure all id start from 0.
      currIdx -= min;
      // Check if index i === 0. It is the first node and i === size - 1 it is last node. Store Idx
      if (i === 0) first = currIdx;
      if (i === size - 1) last = currIdx;
      // Check if the current Node has a left
      if (node.left) {
        queue.push([node.left, currIdx * 2 + 1]);
      }
      // Check if the current Node has a right
      if (node.right) {
        queue.push([node.right, currIdx * 2 + 2]);
      }
    }
    width = Math.max(width, last - first + 1);
  }
  return width;
};

// The solution without the use of for loop. In this we are not able to differencitate between the level of nodes

const levelOrder = function (root) {
  // Check for the edge case
  if (!root) {
    return [];
  }

  // Define the identifiers required
  let queue = []; // We need a queue for level order traversal
  let list = []; // The final list which will be returned

  // Initiate the queue with root node
  queue.push(root);

  // Loop until the queue is empty
  while (queue.length > 0) {
    // The current Node
    let node = queue.shift();

    // Check if it has a left or right
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    list.push(node.val);
  }
  return list;
};

// 21) Diameter of Binary Tree (Basically the longest distance between two nodes) TC - O(N) SC - O(1)

const diameterOfBinaryTree = (root) => {
  // check for edge case
  if (!root) return 0;
  // Identifier required
  var diameter = 0;
  function findDiameter(root) {
    if (!root) return 0;
    let left = findDiameter(root.left);
    let right = findDiameter(root.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }
  findDiameter(root);
  return diameter;
};

// 22) Is Balanced or Not TC - O(N) and SC - O(1)

const isBalanced = (root) => {
  // Check for edge case
  if (!root) return true;

  // Define the identifiers required
  var balanced = true;

  function check(root) {
    if (!root) return 0;
    let left = check(root.left);
    let right = check(root.right);
    // Check if unbalanced
    if (Math.abs(left - right) > 1 || Math.abs(right - left) > 1) {
      balanced = false;
    }
    return Math.max(left, right) + 1;
  }
  check(root);
  return balanced;
};

// 23) LCA or lowest common ancestor

// Brute Force Solution TC - O(N + N + N) and SC - O(N)

const lowestCommonAncestor = (root, p, q) => {
  // check for edge case
  if (!root) return;
  // define the identifiers required
  let firstPath = [];
  let secondPath = [];
  var ans;
  // Define a function to find the path
  function findPath(root, array, target) {
    // Define the termination case of recursion
    if (!root) return 0;
    // Push the current Node onto array
    array.push(root);
    // Check if the target root if found
    if (root === target) {
      return 1;
    }
    let left = findPath(root.left, array, target);
    let right = findPath(root.right, array, target);
    // check if leaf node
    if (left === 0 && right === 0) {
      array.pop();
    }
    return left || right;
  }
  // find both path
  findPath(root, firstPath, p);
  findPath(root, secondPath, q);

  // Now loop through both of them and try to find a non unique element
  let index = 0;
  while (index < firstPath.length || index < secondPath.length) {
    if (firstPath[index] !== secondPath[index]) {
      return firstPath[index - 1];
    }
    index++;
  }
};
