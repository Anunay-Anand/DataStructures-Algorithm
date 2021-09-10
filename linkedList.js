// Creating our own linkedList
// Anything outside the constructor is out of initial state

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(value, next) {
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
list.append(12);
list.prepend(8);
list.insert(1, 5);


// 1) Delete Node from linked list without Head

// Sol - 1 :--
var deleteNode1 = (node) => {
  let deleteNode = node.next;
  node.val = deleteNode.val;
  node.next = deleteNode.next;
  delete deleteNode;
}

// Sol - 2 :--
var deleteNode2 = (node) => {
  let prev = node;
  let curr = node.next;
  while (curr !== null) {
    prev.val = curr.val;
    if (curr.next === null) {
      prev.next = null;
    } else {
      prev.next = curr;
    }
    prev = curr;
    curr = curr.next;
  }
};

// 2) Remove nth Node from End

// Sol - 1 :--
var removeNthFromEnd1 = function (head, n) {

  if (head.next === null) {
    return null;
  }
  let length = 0;
  let currentNode = head;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    length++;
  }
  // Check if length = n (delete head)
  if (n === length) {
    head = head.next;
    return head;
  }
  let prev = traverse(head, length - n);
  let deleteNode = prev.next;
  prev.next = deleteNode.next;
  delete deleteNode;
  return head;

};

const traverse = (head, index) => {
  let count = 1;
  let currentNode = head;
  while (count !== index) {
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}

// sol - 2 :--

var removeNthFromEnd2 = function (head, n) {

  let dummyHead = new ListNode;
  dummyHead.next = head;
  let fast = dummyHead;
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  let prev = dummyHead;
  let curr = dummyHead;
  while (fast) {
    prev = curr;
    curr = curr.next;
    fast = fast.next;
  }

  prev.next = curr.next;

  return dummyHead.next;
};

// 3) Reverse a linkedlist

var reverseList = (head) => {
  if(!head) {
      return null;
  }
  if(head.next === null) {
      return head;
  } 
  first = head;
  second = head.next;
  while(second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
  }
  head.next = null;
  head = first;
  return head;
};

// 4) Merged two list sorted

var mergeTwoLists = function(l1, l2) {
  if(l1 === null && l2 === null) {
      return null;
  }
  if(l1 && !l2) {
      return l1;
  }
  if(l2 && !l1) {
      return l2;
  }
  let mergedNode = new ListNode;
  let head = mergedNode;
  let nodeOne = l1;
  let nodeTwo = l2;
  while(nodeOne || nodeTwo) {
      if(nodeOne.val <= nodeTwo.val || !nodeTwo) {
          mergedNode.next = nodeOne;
          mergedNode = mergedNode.next;
          nodeOne = nodeOne.next;
          if(nodeOne === null) {
              nodeOne = 0;
          }
          console.log(nodeOne);
      } else {
          mergedNode.next = nodeTwo;
          mergedNode = mergedNode.next;
          nodeTwo = nodeTwo.next;
          if(nodeTwo === null) {
              nodeTwo = 0;
          }
          console.log(nodeTwo);
      }
  }
  return head.next;
};