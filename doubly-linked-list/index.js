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
}

let list = new DoublyLinkedList();
list.push(100);
list.push(101);
list.push(102);
list.push(103);
console.log(list)
