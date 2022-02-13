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

// 2) Create a Queue using Stack

// var MyQueue = function() {
//     this.stack1 = [];
//     this.stack2 = [];
// };

// MyQueue.prototype.push = function(x) {
//     this.stack1.push(x);
//     return null;
// };

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

// MyQueue.prototype.empty = function() {
//     if(this.stack1.length === 0 && this.stack2.length === 0) {
//         return true;
//     }
//     return false;
// };

// 3) Circular Queue Design

var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.front = -1;
  this.rear = -1;
  this.length = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.rear === -1 && this.front === -1) {
    this.rear = 0;
    this.front = 0;
    this.queue[0] = value;
    return true;
  } else {
    if ((this.rear + 1) % this.length === this.front) {
      return false;
    } else {
      this.rear = (this.rear + 1) % this.length;
      this.queue[this.rear] = value;
      return true;
    }
  }
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.rear === -1 && this.front === -1) {
    return false;
  } else if (this.front === this.rear) {
    this.queue[this.front] = -1;
    this.rear = -1;
    this.front = -1;
  } else {
    this.queue[this.front] = -1;
    this.front = (this.front + 1) % this.length;
  }
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.front !== -1) {
    return this.queue[this.front];
  }
  return -1;
};

MyCircularQueue.prototype.Rear = function () {
  if (this.rear !== -1) {
    return this.queue[this.rear];
  }
  return -1;
};

MyCircularQueue.prototype.isEmpty = function () {
  if (this.rear === -1) {
    return true;
  }
  return false;
};

MyCircularQueue.prototype.isFull = function () {
  if ((this.rear + 1) % this.length === this.front && this.front !== -1) {
    return true;
  }
  return false;
};

// 4) Reverse a Queue

class Solution {
  //Function to reverse the queue.
  rev(q) {
    //your code here
    // Check if the Queue is empty
    let stack = [];
    while (!q.empty()) {
      stack.push(q.pop());
    }
    while (stack.length > 0) {
      q.push(stack.pop());
    }
    return q;
  }
}

// 5) First Non Repeating Character in a String

// 1st method with length and front variables (identifiers)
function FirstNonRepeating(A) {
  //code here
  let queue = [];
  let countMap = {};
  let res = "";
  let front = 0;
  let length = 0;
  for (let i = 0; i < A.length; i++) {
    // Push the elements onto the Queue
    queue.push(A[i]);
    length++;
    // Keep a count of the elements
    if (A[i] in countMap) {
      countMap[A[i]] = countMap[A[i]] + 1;
    } else {
      countMap[A[i]] = 1;
    }
    // Now check for non repeating character
    while (length > 0) {
      if (countMap[queue[front]] > 1) {
        front++;
        length--;
      } else {
        res = res + queue[front];
        break;
      }
    }
    if (length === 0) {
      res = res + "#";
    }
  }
  return res;
}
