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
}

let list = new DoublyLinkedList();
list.push(100);
list.push(100);
list.push(100);
list.push(101);
console.log(list.shift())
