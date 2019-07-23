class node {
    constructor (data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linked_list {
    constructor () {
        this.head = null;
    }

    isEmpty () {
        return this.head === null;
    }

    addToFront (data) {
        this.head = new node(data, this.head);
    }

    addAtEnd (val) {
        if (this.head !== null) {
            this.head = new node(data = val);
        }
        let curr = this.head
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node(data = val);
    }

    deleteNode (key) {
        let curr = this.head;
        let prev = null;
        while (curr && curr.data !== key) {
            prev = curr;
            curr = curr.next;
        }
        if (prev === null) {
            this.head = curr.next;
        } else if (curr) {
            prev.next = curr.next;
            curr.next = null;
        }
    }

    printList () {
        let node =  this.head;
        while (node !== null) {
            //list += node.data
            console.log(node.data + " => ");
            node = node.next;
        }
    }
}

const test = new linked_list();
test.addToFront(5);
test.addToFront(8);
test.addToFront(9);
test.printList()