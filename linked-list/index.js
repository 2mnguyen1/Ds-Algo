class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        let currentHead = this.head;
        let newHead = this.head.next;
        if (!currentHead) return undefined;
        this.head = newHead;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unShift(val) {
        if (!val) return undefined;
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if (index >= this.length || index < 0) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i <= index; i++){
            if (i === index){
                return current;
            }
            current = current.next;
        }
    }
    set(index, val){
        let foundNode = this.get(index);
        if (!foundNode){
            return false;
        } else {
            foundNode.val = val
            return true;
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length){ return false }
        if (index === this.length) { return !!this.push(val) }
        if (index === 0) { return !!this.unShift(val) }

        let newNode = new Node(val)
        let previous = this.get(index - 1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        let head = this.head;
        this.head = this.tail;
        this.tail = head;

        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = head.next
            head.next = prev;
            prev = head;
            head = next;
        }
        return this
    }
}

let list = new SinglyLinkedList();

list.push(123);
list.push(100);
list.push(312);
list.push(444);

console.log(list.reverse())
