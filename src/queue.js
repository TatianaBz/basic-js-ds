const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
const queue = new Queue();

class Queue {
  constructor() {
    this.queue = [];
    this.result = {};
  }
  getUnderlyingList() {
    this.result[value] = this.queue[0];
    this.result[next] = this.queue[1];

    return this.result;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    let res = this.queue.shift();
    return res;
  }
}

module.exports = {
  Queue,
};
