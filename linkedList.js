// Creating our own linkedList
// Anything outside the constructor is out of initial state

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(value) {
    // Linked list will have three properties
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Create the new Node
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    // It will return the added node as tail
    return this.printList();
  }

  prepend(value) {
    // Create a new Node
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    // It will return the added node as tail
    return this.printList();
  }

  printList() {
    // Printing the entire list
    const array = [];
    let currentNode = this.head;
    // if all node traversed and no node left. Thus null
    while (currentNode !== null) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    // traverse to the index and return the node
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // Check for all base case
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    // Create a new node at start
    const node = new Node(value);
    let currentNode = this.traverseToIndex(index - 1);
    // Use the currentNode to add the node
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    let currentNode = this.traverseToIndex(index - 1);
    let deletingNode = currentNode.next;
    currentNode.next = deletingNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    // To make sure first item is tail by the end
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const list = new Linkedlist(10);
// list.append(12);
// list.prepend(8);
// list.insert(1, 5);

// 1) Delete Node from linked list without Head

// Sol - 1 :--
// var deleteNode1 = (node) => {
//   let deleteNode = node.next;
//   node.val = deleteNode.val;
//   node.next = deleteNode.next;
//   delete deleteNode;
// };

// Sol - 2 :--
// var deleteNode2 = (node) => {
//   let prev = node;
//   let curr = node.next;
//   while (curr !== null) {
//     prev.val = curr.val;
//     if (curr.next === null) {
//       prev.next = null;
//     } else {
//       prev.next = curr;
//     }
//     prev = curr;
//     curr = curr.next;
//   }
// };

// 2) Remove nth Node from End

// Sol - 1 :--
// var removeNthFromEnd1 = function (head, n) {
//   if (head.next === null) {
//     return null;
//   }
//   let length = 0;
//   let currentNode = head;
//   while (currentNode !== null) {
//     currentNode = currentNode.next;
//     length++;
//   }
//   // Check if length = n (delete head)
//   if (n === length) {
//     head = head.next;
//     return head;
//   }
//   let prev = traverse(head, length - n);
//   let deleteNode = prev.next;
//   prev.next = deleteNode.next;
//   delete deleteNode;
//   return head;
// };

// const traverse = (head, index) => {
//   let count = 1;
//   let currentNode = head;
//   while (count !== index) {
//     currentNode = currentNode.next;
//     count++;
//   }
//   return currentNode;
// };

// sol - 2 :--

// var removeNthFromEnd2 = function (head, n) {
//   let dummyHead = new ListNode();
//   dummyHead.next = head;
//   let fast = dummyHead;
//   while (n > 0) {
//     fast = fast.next;
//     n--;
//   }

//   let prev = dummyHead;
//   let curr = dummyHead;
//   while (fast) {
//     prev = curr;
//     curr = curr.next;
//     fast = fast.next;
//   }

//   prev.next = curr.next;

//   return dummyHead.next;
// };

// 3) Reverse a linkedlist

// var reverseList = (head) => {
//   if (!head) {
//     return null;
//   }
//   if (head.next === null) {
//     return head;
//   }
//   first = head;
//   second = head.next;
//   while (second) {
//     let temp = second.next;
//     second.next = first;
//     first = second;
//     second = temp;
//   }
//   head.next = null;
//   head = first;
//   return head;
// };

// 4) Merged two list sorted

// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null && l2 === null) {
//     return null;
//   }
//   if (l1 && !l2) {
//     return l1;
//   }
//   if (l2 && !l1) {
//     return l2;
//   }
//   let mergedNode = new ListNode();
//   let head = mergedNode;
//   let nodeOne = l1;
//   let nodeTwo = l2;
//   while (nodeOne || nodeTwo) {
//     if (nodeOne.val <= nodeTwo.val || !nodeTwo) {
//       mergedNode.next = nodeOne;
//       mergedNode = mergedNode.next;
//       nodeOne = nodeOne.next;
//       if (nodeOne === null) {
//         nodeOne = 0;
//       }
//       console.log(nodeOne);
//     } else {
//       mergedNode.next = nodeTwo;
//       mergedNode = mergedNode.next;
//       nodeTwo = nodeTwo.next;
//       if (nodeTwo === null) {
//         nodeTwo = 0;
//       }
//       console.log(nodeTwo);
//     }
//   }
//   return head.next;
// };

// Optimized
// Tc - O(N+M) SC-O(1)

const mergeTwoLists = (list1, list2) => {
  // define the edge case
  if (!list1 && !list2) return null;
  if (!list1 || !list2) return list1 || list2;

  // define the identifiers required
  let temp; // It will keep track of nodes traversed
  let head; // It will be the head pointer of merged list

  // find the list having smaller first node. Replace if list2.val is smaller.
  if (list1.val > list2.val) {
    temp = list1;
    list1 = list2;
    list2 = temp;
  }

  // head pointing to list1
  head = list1;

  // Loop until list1 && list2 exist
  while (list1 !== null && list2 !== null) {
    temp = null;
    // Loop until list1 is smaller than that of list2
    while (list1 !== null && list1.val <= list2.val) {
      // Store curr node in temp
      temp = list1;
      // Traverse to next list node
      list1 = list1.next;
    }
    temp.next = list2;

    // Swap list1 and list2;
    temp = list1;
    list1 = list2;
    list2 = temp;
  }
  return head;
};

// 5) Cycle in Linkedlist

// var hasCycle = function (head) {
//   let fast = head;
//   let slow = head;
//   // first loop
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// };

// hash map solution

// let fast = head;
// let slow = head;
// while (fast && fast.next) {
//   slow = slow.next;
//   fast = fast.next.next;
//   if (slow === fast) {
//     return true;
//   }
// }
// return false;

// 6) Cycle in Linkedlist 2

// O(n) space and time solution
// var detectCycle = function (head) {
//   let slow = head;
//   let fast = head;
//   let pos = [];
//   while (head && head.next) {
//     pos.push(slow);
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return pos[pos.length - 2] || null;
//     }
//   }
//   return null;
// };

// O(n) time and O(1) space solution

// var detectCycle = function (head) {
//   // Check for the edge cases
//   if (!head || !head.next) {
//     return null;
//   }

//   let slow = head;
//   let fast = head;

//   // Loop 1 to find slow === fast (thus there is a loop)
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       break;
//     }
//   }

//   // to check if fast runner and slow both met at end
//   if (!fast || !fast.next) {
//     return null;
//   }

//   slow = head;

//   // Loop 2 to find the node which creates cycle
//   while (slow != fast) {
//     slow = slow.next;
//     fast = fast.next;
//   }

//   return slow;
// };

//7) Remove any element from the linkedList

// var removeElements = function (head, val) {
//   // Check for all edge cases
//   if (!head) {
//     return head;
//   }

//   // All the nodes where head element had the val was deleted
//   while (head && head.val === val) {
//     head = head.next;
//   }

//   // Deleting remaining Nodes
//   let currentNode = head;
//   while (currentNode && currentNode.next) {
//     if (currentNode.next.val === val) {
//       currentNode.next = currentNode.next.next;
//     } else {
//       currentNode = currentNode.next;
//     }
//   }
//   return head;
// };

// 8) Odd even LinkedList

// var oddEvenList = function (head) {
//   if (!head) {
//     return head;
//   }
//   let odd = head;
//   let even = head.next;
//   let temp = even;
//   while (odd.next && even.next) {
//     odd.next = even.next;
//     if (odd.next) {
//       odd = odd.next;
//     }
//     even.next = odd.next;
//     if (even.next) {
//       even = even.next;
//     }
//   }
//   odd.next = temp;
//   return head;
// };

// 9) Design Doubly Linkedlist

class NewNode {
  constructor(value) {
    this.next = null;
    this.val = value;
    this.prev = null;
  }
}

class DoublyLikedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index > this.length || this.length === 0) {
      return -1;
    }
    let curr = this.head;
    while (index) {
      curr = curr.next;
      index--;
    }
    return curr.val;
  }

  prepend(val) {
    let newNode = new NewNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  append(val) {
    let newNode = new NewNode(val);
    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  traverse(index) {
    let curr = this.head;
    while (index) {
      curr = curr.next;
      index--;
    }
    return curr;
  }

  addAtAnyIndex(index, val) {
    if (index === 0) {
      this.prepend(val);
      return;
    }
    if (index > this.length) {
      this.append(val);
      return;
    }
    let newNode = new NewNode(val);
    let loc = this.traverse(index);
    let temp = loc.prev;
    temp.next = newNode;
    newNode.prev = temp;
    newNode.next = loc;
    loc.prev = newNode;
    this.length++;
  }

  removeAtAnyIndex(index) {
    if (index > this.length) {
      return -1;
    }
    if (index === 0) {
      let temp = this.head.next;
      temp.prev = null;
      this.head = temp;
      this.length--;
      return;
    }
    let deleteNode = this.traverse(index);
    let prevNode = deleteNode.prev;
    let nextNode = deleteNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }
}

const newList = new DoublyLikedList();
newList.prepend(5);
newList.addAtAnyIndex(0, 4);
newList.append(6);
newList.removeAtAnyIndex(1);
console.log(newList);

// 10) Single LinkedList palindrome

const isPalindrome = (head) => {
  // Return edge case
  if (!head || !head.next) {
    return true;
  }

  // First loop to bring slow to the mid of list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // for odd list (fast exists)
  if (fast !== null) {
    slow = slow.next;
  }

  // Reverse the second half of the list (slow as head)
  let first = slow;
  let second = slow.next;
  while (second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  slow.next = null;
  slow = first;

  // Compare the first half and reversed second half of list
  let currentNode = head;
  while (currentNode && currentNode.next && slow && slow.next) {
    if (currentNode.val !== slow.val) {
      return false;
    }
    currentNode = currentNode.next;
    slow = slow.next;
  }

  if (currentNode.val !== slow.val) {
    return false;
  }

  return true;
};

// 11) Add Two Numbers (Linkedlist)

function listEmpty(l, carry, list) {
  let sum;
  while (l) {
    // Find sum by checking carry or not
    if (carry) {
      sum = l.val + carry;
      carry = 0;
    } else {
      sum = l.val;
    }

    // Create new Node by new sum value
    if (sum > 9) {
      carry = 1;
      let numStr = sum.toString();
      sum = +numStr[1];
    }
    let newNode = new ListNode(sum);
    list.next = newNode;
    list = list.next;
    l = l.next;
  }
  // Check if carry
  if (carry) {
    let newNode = new ListNode(1);
    list.next = newNode;
  }
  return list;
}

var addTwoNumbers = function (l1, l2) {
  // Create a new list
  let list = new ListNode();
  let head = list;

  // Global variable for carrry
  let carry = 0;
  let sum;

  // Loop to add all elements of lists
  while (l1 && l2) {
    // Find sum by checking if carry or not
    if (carry) {
      sum = l1.val + l2.val + carry;
      carry = 0;
    } else {
      sum = l1.val + l2.val;
    }

    // Create new node by new sum value
    if (sum > 9) {
      carry = 1;
      let numStr = sum.toString();
      sum = +numStr[1];
    }
    let newNode = new ListNode(sum);
    list.next = newNode;
    list = list.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  // Check if either l1 or l2 is remaining
  if (l1) {
    list = listEmpty(l1, carry, list);
    return head.next;
  }

  if (l2) {
    list = listEmpty(l2, carry, list);
    return head.next;
  }

  if (carry) {
    let newNode = new ListNode(1);
    list.next = newNode;
  }

  return head.next;
};

// Optimized Solution
// TC - Max(n,m) and SC-(m+n+1)
const addTwoNumbers = (l1, l2) => {
  // define the edge case
  if (!l1 && !2) return null;
  if (!l1 || !l2) return l1 || l2;

  // define the identfiers required
  let carry = 0; // it will store the carry
  let sum; // it will hold the sum in each iteration
  // Create a dummy list
  let dummyHead = new ListNode();
  let temp = dummyHead;

  while (l1 || l2 || carry) {
    // Reinitate the sum to 0
    sum = 0;
    // Add both the nodes onto the sum
    if (l1 !== null) {
      sum = l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    // Add the current carry in sum
    sum += carry;
    // Find if there is carry
    carry = Math.floor(sum / 10);
    // Find the value of the node
    let node = new ListNode(Math.floor(sum % 10));
    // Add it to dummy list
    temp.next = node;
    // Move temp
    temp = temp.next;
  }
  return dummyHead.next;
};

// 12) Intersection between linkedlist

// Finding length difference and then using it to find intersection method

function traverseHead(head, index) {
  while (index) {
    head = head.next;
    index--;
  }
  return head;
}

const getIntersectionNode = (headA, headB) => {
  let length1 = 0;
  let length2 = 0;
  let curr1 = headA;
  let curr2 = headB;

  // Find the length of both list
  while (curr1 || curr2) {
    if (curr1) {
      curr1 = curr1.next;
      length1++;
    }
    if (curr2) {
      curr2 = curr2.next;
      length2++;
    }
  }

  if (length1 === 1 && length2 === 1) {
    if (headA.val === headB.val) {
      return headA;
    }
    return null;
  }

  if (length1 > length2) {
    headA = traverseHead(headA, length1 - length2);
  }

  if (length2 > length1) {
    headB = traverseHead(headB, length2 - length1);
  }

  while (headA && headB) {
    if (headA.next === headB.next) {
      return headA.next;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};

// Exchanging head or over turning head method
const getIntersectionNodeOP = (headA, headB) => {
  if (!headA && !headB) {
    return null;
  }

  let currA = headA;
  let currB = headB;
  while (currA !== currB) {
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }
  return currA;
};

// 13) Flatten Multilevel Linkedlist to Doubly linkedlist

const flatten = (head) => {
  // Check for the edge cases
  if (!head) {
    return head;
  }

  let curr = head;
  // Stack used to store the next in case children occur
  let stack = [];

  // While loop until linkedlist is empty
  while (curr) {
    if (curr.child) {
      // if next of currentNode exist push onto stack
      if (curr.next) {
        // Push the current node next onto stack and treat child as next
        stack.push(curr.next);
      }
      curr.next = curr.child;
      curr.next.prev = curr;
      curr.child = null; // Inorder to ensure our list is a doubly linked list
    } else if (!curr.next && stack.length !== 0) {
      curr.next = stack.pop();
      curr.next.prev = curr;
    }
    curr = curr.next;
  }
  return head;
};

// 14) Rotate Linkedlist

// 1st it is the O(n^2) solution in O(1) space

const rotateRight2 = (head, k) => {
  // Check for edge cases
  if (!head || !head.next) {
    return head;
  }

  let curr, prev;
  let len = 1;
  // Loop k times
  while (k > 0) {
    // Loop or travere list for every k
    curr = head;
    // loop until the last node
    while (curr && curr.next) {
      prev = curr;
      curr = curr.next;
      len++;
    }
    // Reduce k if k > len
    if (k > len) {
      counter = 1;
      k = k % len;
      if (k === 0) {
        return head;
      }
    }
    // Convert curr or last node to head
    curr.next = head;
    head = curr;
    // Convert prev to last node to tail
    prev.next = null;
    k--;
  }
  return head;
};

// 2) O(n) solution of list rotation

const rotateRight = (head, k) => {
  // Check for edge cases
  if (!head || !head.next) {
    return head;
  }

  let curr = head;
  let prev;
  let len = 1;
  // Calculate length of list
  while (curr && curr.next) {
    curr = curr.next;
    len++;
  }

  // Reduce the number of Rotations
  k = k % len;
  if (k === 0) {
    return head;
  }

  // Convert it into circular list
  curr.next = head;

  k = len - k;

  while (k > 0) {
    prev = head;
    head = head.next;
    k--;
  }

  // Cut the list
  prev.next = null;

  // Return the Rotated list
  return head;
};

// 15) LRU CACHE (Linkedlist + hash map (object))

// Design of Node
class Node {
  constructor(key, value) {
    this.key = key;
    this.next = null;
    this.prev = null;
    this.val = value;
  }
}

const LRUCache = function (capacity) {
  //Design of cache
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.max = capacity;
  this.cache = {};
};

LRUCache.prototype.get = function (key) {
  if (!this.cache[key]) {
    return -1;
  }

  let foundNode = this.cache[key];

  if (foundNode === this.head) return foundNode.val;

  let previous = foundNode.prev;
  let next = foundNode.next;

  if (foundNode === this.tail) {
    previous.next = null;
    this.tail = previous;
  } else {
    previous.next = next;
    next.prev = previous;
  }

  this.head.prev = foundNode;
  foundNode.next = this.head;
  foundNode.prev = null;
  this.head = foundNode;

  return foundNode.val;
};

LRUCache.prototype.put = function (key, value) {
  let newNode;
  if (!this.cache[key]) {
    newNode = new Node(key, value);
  } else {
    this.cache[key].val = value;
    return this.get(key);
  }

  // Check if the size is zero
  if (this.size === 0) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    this.cache[key] = newNode;
    return;
  }

  // Check if max size
  if (this.size === this.max) {
    // Remove from cache
    delete this.cache[this.tail.key];
    // If capacity is more than one
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
    } else {
      // If Capacity is less than one
      this.head = newNode;
      this.tail = newNode;
      this.cache[key] = newNode;
      return;
    }
  }

  // Insert it into head
  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.size++;

  //add to cache
  this.cache[key] = newNode;
  return;
};

// 16) Middle of List

const middleNode = (head) => {
  let currentNode = head;
  let len = 0;
  while (currentNode) {
    len++;
    currentNode = currentNode.next;
  }
  let mid = Math.floor(len / 2);
  while (mid) {
    head = head.next;
    mid--;
  }
  return head;
};

// 17) Sort a list (merge sort and inbuilt sort)

// O(nlogn) and O(n)

const sortList = (head) => {
  let arr = [];
  let node = head;
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  //Sort
  arr.sort((a, b) => a - b);
  head = node;
  for (let x of arr) {
    node.val = x;
    node = node.next;
  }
  return head;
};

// O(nlogn) and O(1)
const sortList2 = (head) => {
  // Check for edge cases/ end of recursion
  if (!head || !head.next) {
    return head;
  }
  // Using floyd method to find middle
  // slow * 2 = fast
  let slow = head;
  let fast = head;
  // To simply seperate the first half from second half
  let temp;
  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  temp.next = null;
  // Recursive call to both side of list until head === empty
  let l1 = sortList(head);
  let l2 = sortList(slow);

  return mergeList(l1, l2);
};

const mergeList = (l1, l2) => {
  let list = new ListNode();
  let curr = list;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // If unequal list
  if (l1 !== null) {
    curr.next = l1;
    l1 = l1.next;
  }
  if (l2 !== null) {
    curr.next = l2;
    l2 = l2.next;
  }
  return list.next;
};

// 18) Flatten A linked list
// TC-O(N)  SC-O(1)

class Solution {
  mergeList(l1, l2) {
    // define the identifiers required
    // define a temp node to start
    let temp = new Node(0);
    // to return the head of flattned list
    let dummyHead = temp;

    // Loop for all nodes of list
    while (l1 !== null && l2 !== null) {
      // Check if l1 is smaller than l2
      if (l1.data < l2.data) {
        // Add l1 to temo bottom
        temp.bottom = l1;
        // increment temp
        temp = temp.bottom;
        // increment l1 to next
        l1 = l1.bottom;
      } else {
        // Add l2 to temp bottom
        temp.bottom = l2;
        // increment temp
        temp = temp.bottom;
        // increment l2 to next
        l2 = l2.bottom;
      }
    }

    // Check if l1 is not null
    if (l1 !== null) {
      temp.bottom = l1;
    }
    if (l2 !== null) {
      temp.bottom = l2;
    }
    // Return the dummyHead's bottom or head
    return dummyHead.bottom;
  }

  flatten(head) {
    // define the edge case
    if (head === null || head.next === null) return head;

    // Recursively call flatten for each node;
    head.next = this.flatten(head.next);

    // Invoke the merge function for list
    head = this.mergeList(head, head.next);

    return head;
  }
}
