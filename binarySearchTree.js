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

// 3) Create a Binary Search Tree

// DFS edition TC - O(N) SC-O(N)

const sortedArrayToBST = (nums) => {
  // define the edge case
  if (nums.length === 0) {
    return null;
  }
  // define the identifiers required

  // Find the mid of the array
  let mid = Math.floor(nums.length / 2);
  // build or create the root node using the mid
  let root = new TreeNode(nums[mid]);

  // Now recursively move left and right and find the nodes.. It doesn't include the last index itself (0,mid) === (0,mid-1)
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  // Return the root
  return root;
};

// 4) Construct binary search tree from preorder

// TC - O(NLOGN + O(N)) SC - O(N) + O(N)
const bstFromPreorder = (preorder) => {
  // define the identifiers required
  let inorder = preorder.sort((a, b) => a - b);

  // defining a function to create tree
  function buildTree(nums) {
    // define the edge case
    if (nums.length === 0) {
      return null;
    }
    // define the identifiers required

    // Find the mid of the array
    let mid = Math.floor(nums.length / 2);
    // build or create the root node using the mid
    let root = new TreeNode(nums[mid]);

    // Now recursively move left and right and find the nodes.. It doesn't include the last index itself (0,mid) === (0,mid-1)
    root.left = buildTree(nums.slice(0, mid));
    root.right = buildTree(nums.slice(mid + 1));

    // Return the root
    return root;
  }
  // invoking the function call
  return buildTree(inorder);
};

// Optimized TC - O(3N) SC - O(N)

const bstFromPreorderOpt = (preorder) => {
  // define the identifiers required
  let bound = +Infinity; // This is the upper bound by default
  let index = 0; // idx for node to be inserted

  // Define the function to find
  function buildTree(preorder, idx, ub) {
    // define the case of termination
    if (idx === preorder.length || preorder[idx] > ub) {
      return null;
    }
    // Building the current root node.. We increment after building the node
    let root = new TreeNode(preorder[idx++]);
    // we will traverse left and right
    // The left will get the current root val as ub..
    // The right will be passes the same ub as root.. Thus intially infinity for root node
    root.left = buildTree(preorder, idx, root.val);
    root.right = buildTree(preorder, idx, ub);

    // Finally return the root node
    return root;
  }
  // invoke the function
  return buildTree(preorder, index, bound);
};

// 5) LCA IN BST

// TC - O(logn) SC - O(1)

const lowestCommonAncestor = (root, p, q) => {
  // define the edge case
  if (!root) root;

  // define the main condition
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

// 6) FInding Successsor

// Here both are nodes
const findSucessor = (root, target) => {
  // define the termination case
  if (!root) {
    return;
  }
  let succ = null;
  // define the loop
  while (root !== null) {
    // If root is greater than target node
    if (root.val > target.val) {
      // for predeccsor root.val >= target.val = root.left
      // update the succ
      // Move left
      succ = root.val;
      root = root.left;
    } else {
      // if root.val < target.val (predeccor = root.val) then root = root.right;
      root = root.right;
    }
  }
  return succ;
};

// 7) Find the Floor in BST.
// It means to find the greatest node in BST which is smaller than the given target value
// target = 6 BST Inorder = [2,3,5,6,8,9]; (here 5 is answer)

// Both are nodes
// define the identifiers required
// Iterative Solution TC - O(H) SC - O(1)
let floor = -1;
function findFloor(root, key) {
  // Loop until the floor is found
  while (root !== null) {
    // if key is there in BSt
    if (root.val === key) {
      floor = root.val;
      return root.val;
    } else if (root.val < key) {
      floor = root.val;
      findFloor(root.left, key);
    } else {
      findFloor(root.right, key);
    }
  }
  return floor;
}

// Recursive Solution
// TC-O(N) SC-O(1)

function floor(root, key) {
  // If root does not exist.
  if (root === null) {
    return -1;
  }

  // If root.val is greater than key
  if (root.val === key) {
    floorValue = root.data;
    return floorValue;
  } else if (root.data > key) {
    floor(root.left, key);
  } else {
    floorValue = root.data;
    floor(root.right, key);
  }
  return floorValue;
}

// 8) Finding Floor and Ciel both in BST.

// Iterative Approach
// TC - O(log2N) SC - O(1)

function floorCeilBSTHelper(root, key) {
  while (root != null) {
    if (root.data == key) {
      ceil = root.data;
      floor = root.data;
      return;
    }

    if (key > root.data) {
      floor = root.data;
      root = root.right;
    } else {
      ceil = root.data;
      root = root.left;
    }
  }
  return;
  // Once the function return print ciel and root
}

// 9) Kth Smallest ELement in BST

// Recursive + Brute Force
// TC - O(N) SC - O(N)

const kthSmallest = (root, k) => {
  // define the identifiers required
  let list = [];
  // recursively move left and right and store
  function preorder(root) {
    // define the termination case
    if (!root) return;
    // Traverse left
    preorder(root.left);
    // if root then store it in list
    list.push(root.val);
    // Now traverse right
    preorder(root.right);
  }
  preorder(root);
  // Using the list find the kth element
  return list[k - 1];
};

// Iterative + BRute Force
// Tc - O(N) SC - O(N)

const kthSmallestIterative = (root, k) => {
  // define the identifiers required
  let ans = -1; // it will hold the final answer
  let counter = 0; // it will increment with nodes visited
  let stack = []; // inorder for iterative traversal

  // Loop until root is empty
  while (root !== null || stack.length !== 0) {
    // Traverse to left and fill stack until null
    while (root !== null) {
      stack.push(root);
      // traverse left
      root = root.left;
    }
    // define the current root
    root = stack.pop();
    // increment counter
    counter++;
    // Check if counter is kth element
    if (counter === k) {
      ans = root.val;
    }
    // traverse to right
    root = root.right;
  }
  return ans;
};

// Optimized solution
// O(N) O(1) // if ignoring stack auxiliary space

var kthSmallestRecursiveOptimized = function (root, k) {
  let result;
  // this will be used to see which smallest element is processed at the moment
  let counter = 0;

  let findSmallest = function findSmallest(head) {
    // if the current processed node is null then the recursion will go back
    if (head) {
      // first drill down to the left child node (if it doesn't exist the recursion will continue to the next line)
      findSmallest(head.left);

      // if the current smallest number still hasn't reached k
      if (counter < k) {
        // save the value of the current node and increase counter
        result = head.val;
        counter++;

        // continue drilling down using the right child node
        findSmallest(head.right);
      }
    }
  };

  findSmallest(root);
  return result;
};

// 10) Kth largest element

// Tc - O(N) and O(N)
// return the Kth largest element in the given BST rooted at 'root'
function kthLargest(root, K) {
  // Define the identifier required
  let count = K;
  let ans = -1;

  // define the function
  function findKthLargest(root) {
    // define the termination case
    if (!root) return;

    // Traverse to the most right..until null
    findKthLargest(root.right);
    // decrement of counter
    count--;
    // check if count is 0
    if (count === 0) {
      ans = root.data;
    }
    // Traverse to left
    findKthLargest(root.left);
    return;
  }
  findKthLargest(root);
  return ans;
}

// NOTE :- If we do inorder in reverse. i.e Right, Root and left... we will get list in descending order. Last element to first

// 11) Two Sum in BST

// Brute Force
// TC - O(N) and SC - O(N)
// i) Ans - Find the inorder list using inorder traversal on the given tree.
// ii) Now in that list.. keep two pointer in start and end
// iii) Apply the 2 sum logic and find it number1 + number2 = target exist or not

// Optimized JS TC - O(N) SC-O(N)
// Inorder traversal

var findTarget = function (root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};

// 12) Binary Search Tree iterator

// TC - O(N) SC - O(N)
class BSTIterator {
  // The constructor will take the initial root node passes
  constructor(root) {
    // the stack will hold the sequence of nodes in inorder format
    this.root = root;
    this.stack = [];
  }

  next() {
    // Complete the preorder traversal to fill the stack
    while (this.root !== null) {
      this.stack.push(this.root);
      this.root = this.root.left;
    }
    // find the root
    const res = this.stack.pop();
    // Iterate to right
    this.root = res.right;
    // return the res
    return res.val;
  }

  hasNext() {
    // Check if next exist
    return this.root || this.stack.length;
  }
}

// 13) Largest BST in a binary Tree

// Brute Force TC - O(N^2) SC-O(N)
// i) Use the validate BST for every node to find if it is BST.
// ii) If bst do any recursion and traverse the tree and find number of nodes.

// Optimized Approach
// TC - O(N) and SC - O(1) ignoring recursion.

// Defining the class NodeValue for each node in tree.
class NodeValue {
  constructor(sum, isBST, max, min) {
    this.sum = sum;
    this.isBST = isBST;
    // the max in left. The largest in left.
    this.max = max;
    // the min in right. The smallest in right.
    this.min = min;
  }
}

// The main function maxSum Bst which returns the Bst having max sum
const maxSumBST = (root) => {
  // define the edge case
  if (!root) return 0;

  // define the identifiers required
  // Keep track of maximum sum of any bst.
  let maxSum = 0;

  // defining function to find BST.
  const search = (root) => {
    // defining the edge case
    if (!root) {
      return new NodeValue(
        0,
        true,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
      );
    }

    // Traverse left and right recursively
    let left = search(root.left);
    let right = search(root.right);

    // Check if the current left and right is a valid BST
    if (
      left.isBST &&
      right.isBST &&
      root.val > left.max &&
      root.val < right.min
    ) {
      // If it is a valid BST
      let sum = root.val + left.sum + right.sum;
      // Find the maximum Sum
      maxSum = Math.max(maxSum, sum);
      // Return NodeValue with new max of left and min of Right and updated sum.
      // In truth we know whatever is coming from the left is the minimal and smaller than root.
      // In truth we know whatever is coming from the right is the maximum and larger than root.
      return new NodeValue(
        sum,
        true,
        Math.max(root.val, right.max),
        Math.min(root.val, left.min)
      );
    }
    // In case not a valid BST
    return new NodeValue(
      0,
      false,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  };
  // Invoke the function call
  search(root);
  return maxSum;
};

// 14) Deserialize and serialize BT

// TC - O(N) and SC - O(N)

const serialize = (root) => {
  // check if no root
  if (!root) return "";
  // define identifiers required
  let queue = []; // needed for level order traversal.
  let str = ""; // storing the tree in the form of string.
  let node, size;

  // Insert the root onto queue
  queue.push(root);

  // Loop until the queue is empty
  while (queue.length !== 0) {
    // calculate the curr queue size for the particular level
    size = queue.length;
    // Loop for the level
    for (let i = 0; i < size; i++) {
      // find the curr node
      let node = queue.shift();
      // Check if node ain't null
      if (node === null) {
        str += "#";
        continue;
      }
      // push the left to curr root
      queue.push(node.left);
      // push the right to current root
      queue.push(node.right);
      // Add the root to string
      str = str + node.val;
    }
    // Add a character to diff between levels
    str += "*";
  }
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  // define the edge case
  if (data.length === 0) return null;
  // define the identifiers required
  let node, root;
  // to keep trach of str traversed
  let index = 1;
  // define a queue to manage nodes
  let queue = [];

  // Build the root node
  root = new TreeNode(data[0]);

  // push the root onto queue
  queue.push(root);

  // Loop until string fully traversed
  while (true) {
    // increment index
    index++;
    // Check if binary Tree completed
    if (index === data.length) {
      break;
    }
    // Loop for the level
    while (data[index] !== "*") {
      // Find the curr node
      let node = queue.shift();
      // The left of curr node left exist
      if (data[index] === "#") {
        node.left = null;
      } else {
        node.left = new TreeNode(data[index]);
        // push the node onto queue.
        queue.push(node.left);
      }
      // increment index
      index++;
      // The right of curr node if right exist
      if (data[index] === "#") {
        node.right = null;
      } else {
        node.right = new TreeNode(data[index]);
        // push the node onto queue.
        queue.push(node.right);
      }
      // increment index
      index++;
    }
  }
  return root;
};

// Optimized
// TC - O(N) and SC - O(N)
{
  // Serialize using Post Order Traversal
  const serialize = function (root) {
    // define the edge case
    if (!root) return null;
    // traverse left node
    const leftSerialized = serialize(root.left);
    // traverse the right node
    const rightSerialized = serialize(root.right);
    // return it in the form of string
    return root.val + "," + leftSerialized + "," + rightSerialized;
  };

  // Deserialize the string or data
  // Inorder traversal
  const deserialize = function (data) {
    // Strore all the nodes in a queue or basically split all and store it in array
    const queue = data.split(",");
    // pass it to helper function
    return deserializeHelper(queue);
  };

  const deserializeHelper = (queue) => {
    // get the node value
    const nodeValue = queue.shift();
    // if node value is null return
    if (nodeValue === "x") return null;
    // create the node
    const newNode = new TreeNode(nodeValue);
    newNode.left = deserializeHelper(queue);
    newNode.right = deserializeHelper(queue);
    return newNode;
  };
}
