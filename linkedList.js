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
