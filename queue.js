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
myQueue.enqueue("jerry");
myQueue.enqueue("tom");
myQueue.enqueue("spike");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
