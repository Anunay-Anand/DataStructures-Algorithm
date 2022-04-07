// 1) Populating Next right pointer (PErfect Binary tree 0/2 children)

// BFS (level order traversal)
// TC - O(N) SC - O(N)

const connect = (root) => {
  // define the edge case
  if (!root) return root;

  // Define the identifiers required
  let queue = []; // Required for level order traversal
  let size; // size of curr level

  // Insert the first element root onto the queue
  queue.push(root);

  // Loop until the queue is empty
  while (queue.length !== 0) {
    // Find the current level size
    size = queue.length;

    // Loop for the current level
    for (let i = 0; i < size; i++) {
      // Find the current root element and also reduce queue size
      let node = queue.shift();
      // Check if prev does not exist or else fill it's next with node
      node.next = size - 1 === i ? null : queue[0];
      // Now check if left exist.
      // We will push left and right both since it is a perfect binary tree
      if (node.left !== null) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  return root;
};

// DFS
// TC - O(N) SC - O(1)
const connect2 = (root) => {
  // define the edge case
  if (!root) return root;

  // Define the identifiers required
  let curr = root;

  // Define the function
  function populatingRightPointer(root) {
    // define the case of termination.
    // If no root or lead node
    if (!root || !root.left) return root;

    // Join the current root's left's next pointer to root's right node
    root.left.next = root.right;
    // Join the current root's right to it's next node which is root's next left if it exist.
    // Thus if root.next exist then only there is a chance
    root.right.next = root.next ? root.next.left : null;

    // Traverse left and right
    populatingRightPointer(root.left);
    populatingRightPointer(root.right);
  }
  // Invoking the function
  populatingRightPointer(root);
  return root;
};

// 2) Search a Binary Search Tree

// BFS - Recursive Solution.
// TC - O(logn) and SC - O(1)
const searchBST = (root, val) => {
  // define the case of termination
  if (!root) return root;

  // define the condition if target found
  if (root.val === val) {
    return root;
  }

  // Check if the target value is smaller than current node val. Then traverse left or right
  // Return whatever result comes
  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

// Iterative Solution
// Tc - O(logn)

const searchBSTIterative = (root, val) => {
  // define the case of termination
  if (!root) return root;

  // Loop until the root is not null
  while (root !== null) {
    // Check if current root val is equal to target
    if (root.val === val) {
      return root;
    }
    // Check if the value is less than current root value.. then move root to the left pointer
    if (val < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return root;
};
