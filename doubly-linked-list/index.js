class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.lenght === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.lenght++;
    return this;
  }
  pop() {
    if (this.lenght === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.lenght--;
    return oldTail;
  }
  shift() {
    if (this.lenght === 0) return undefined;
    let oldHead = this.head;
    if (this.lenght === 1) {
      this.head = null;
      this.length = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.lenght--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.lenght === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
    }
    this.lenght++;
    return this;
  }
  get(index) {
    let result = null;
    let middle = this.lenght / 2;

    if (index < 0 || index >= this.lenght) {
      return null;
    }
    else if (index <= middle) {
      let count = 0;
      result = this.head;
      while (count < index) {
        result = result.next;
        count++;
      }
    } else {
      let count = this.lenght - 1;
      result = this.tail;
      while (count > index) {
        result = result.prev;
        count--;
      }
    }
    return result;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.lenght) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.lenght) {
      return !!this.push(value);
    } else {
      let newNode = new Node(value);
      let beforeInsertNode = this.get(index - 1);
      let afterIntertNode = beforeInsertNode.next;
      beforeInsertNode.next = newNode, newNode.prev = beforeInsertNode;
      newNode.next = afterIntertNode, afterIntertNode.prev = newNode;
      this.lenght++;
    }
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
