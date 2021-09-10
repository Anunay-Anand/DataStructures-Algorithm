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
}

// const list = new Linkedlist(10);
// list.append(12);
// list.prepend(8);
// console.log(list.insert(1, 5));

// 1) Delete Node from linked list without Head

// Sol - 1 :--

// Sol - 2 :--
var deleteNode = (node) => {
  let prev = node;
  let curr = node.next;
  while (curr) {
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
