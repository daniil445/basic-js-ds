const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class List {
    constructor(datum) {
        this.value = datum;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.len = 0;
    }
    getUnderlyingList() {
        return this.head;
    }

    enqueue(value) {
        if (this.len === 0) this.head = new List(value);
        else {
            let temp = this.head;
            while (temp.next) temp = temp.next;
            temp.next = new List(value);
        }
        this.len += 1;
    }

    dequeue() {
        const topHead = this.head.value;
        console.log(topHead);
        this.head = this.head.next;
        return topHead;
    }
}

module.exports = {
    Queue
};
