// 1) Construction of Queue

// Structure of each Queue Node
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Structure of Queue and methods
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Element at the head (element removed in deque)
  front() {
    return this.head;
  }

  // Element at the tail (element last enqueued)
  rear() {
    return this.tail;
  }

  enqueue(val) {
    let newNode = new Node(val);
    // In case the queue is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this.rear();
    } else {
      // Add newNode behind tail in the Queue
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

function queueReversal(q) {
  //your code here
  let len = q.length;
  // Check if the Queue is empty
  if (len === 0) {
    return null;
  }
  let stack = [];
  while (len > 0) {
    stack.push(q.dequeue());
    len--;
  }

  while (stack.length > 0) {
    q.enqueue(stack.pop());
  }

  return q;
}

console.log(queueReversal(myQueue));
// 2) Create a Queue using Stack

// var MyQueue = function() {
//     this.stack1 = [];
//     this.stack2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     this.stack1.push(x);
//     return null;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     if(this.stack2.length > 0) {
//         return this.stack2.pop();
//     } else {
//     while(this.stack1.length > 0) {
//         this.stack2.push(this.stack1.pop());
//     }
//     if(this.stack2.length === 0) {
//         return null;
//     }
//     return this.stack2.pop();
//     }
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     if(this.stack2.length === 0) {
//        while(this.stack1.length > 0) {
//        this.stack2.push(this.stack1.pop());
//     }
//     }
//     if(this.stack2.length === 0) {
//         return -1;
//     }
//     return this.stack2[this.stack2.length - 1];
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     if(this.stack1.length === 0 && this.stack2.length === 0) {
//         return true;
//     }
//     return false;
// };
