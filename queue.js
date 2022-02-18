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

// 6) Sliding Window Maximum (Queue Important)

// O(n^2) solution
const findMaximum = (q, first) => {
  let peak = -Infinity;
  for (let i = first; i < q.length; i++) {
    if (peak < q[i]) {
      peak = q[i];
    }
  }
  return peak;
};

const maxSlidingWindow = (nums, k) => {
  let queue = [];
  let index = k;
  let first = 0;

  // Fill the queue with first window
  for (let i = 0; i < k; i++) {
    queue.push(nums[i]);
  }
  //Enter the first maximum
  queue[first] = findMaximum(queue, first);

  // Number of times we have to loop
  let loop = nums.length - k;

  while (loop > 0) {
    // Enqueue
    queue.push(nums[index++]);
    // Dequeue
    first++;
    // Finding Maximum
    queue[first] = findMaximum(queue, first);
    loop--;
  }
  return queue.slice(0, nums.length - k + 1);
};

// O(n) solution (Using deQueue)

const maxSlidingWindow = (nums, k) => {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);

    // When i + 1 - k >= 0, the window is fully overlapping nums
    const j = i + 1 - k;
    if (j >= 0) {
      res.push(q[0]);
      // If the biggest element in q is about to exit window, remove it from q
      if (nums[j] === q[0]) q.shift();
    }
  }
  return res;
};

// 7) Front, Back and Middle Queue

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.length === 0 || this.length === 1) {
    return this.pushFront(val);
  }
  let mid =
    this.length % 2 !== 0
      ? Math.floor((this.length - 1) / 2)
      : Math.floor(this.length / 2);
  for (let i = this.length - 1; i >= mid; i--) {
    this.queue[i + 1] = this.queue[i];
  }
  this.queue[mid] = val;
  this.length++;
  console.log("length is " + this.length + "queue is" + this.queue);
  return this;
};

FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.queue.push(val);
  this.length++;
  return this;
};

FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.length === 0) {
    return -1;
  }
  this.length--;
  return this.queue.shift();
};

FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.length === 0 || this.length === 1) {
    return this.popBack();
  }
  let mid = Math.floor((this.length - 1) / 2);
  let item = this.queue[mid];
  for (let i = mid; i < this.length - 1; i++) {
    this.queue[i] = this.queue[i + 1];
  }
  this.queue.pop();
  this.length--;
  return item;
};

FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.length === 0) {
    return -1;
  }
  this.length--;
  return this.queue.pop();
};

// 8) Circular Tour/Gas Station

const canCompleteCircuit = (gas, cost) => {
  // Points to the starting Index
  let start = 0;
  // The current balance updated on each index
  let currentBalance = 0;
  // The total balance to ensure it is possible journey
  let totalBalance = 0;

  for (let i = 0; i < gas.length; i++) {
    // Check the balance wether it is possible to journey to station with gas
    currentBalance = currentBalance + gas[i] - cost[i];
    // Keep track of total Balance (valid journey)
    totalBalance = totalBalance + gas[i] - cost[i];
    // If the balance is negative update the starting point
    if (currentBalance < 0) {
      start = i + 1;
      currentBalance = 0;
    }
    console.log("total Balance " + totalBalance);
  }
  return totalBalance >= 0 ? start : -1;
};
