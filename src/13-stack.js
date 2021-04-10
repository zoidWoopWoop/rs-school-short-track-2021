/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(el) {
    this.arr.push(el);
    return this;
  }

  pop() {
    const popped = this.arr.pop();
    return popped;
  }

  peek() {
    const peeked = this.arr[this.arr.length - 1];
    return peeked;
  }
}

module.exports = Stack;
