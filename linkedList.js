//Simpler Implementation
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
console.log("\n")

//A more complex implementation
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
    getData() {
        return this.data;
    }
    getNext() {
        return this.next;
    }
    setData(val) {
        this.data = val;
    }
    setNext(val) {
        this.next = val;
    }
}

class linkedList {
    constructor () {
        this.head = null;
    }

    isEmpty () {
        return self.head === null;
    }

    add (item) {
        let new_node = new Node(item);
        new_node.setNext(this.head)
        this.head = new_node
    }

    size () {
        let count = 0,
        current = this.head;
        while (current !== null) {
            count += 1;
            current = current.getNext()
        }
        return count;
    }

    search (item) {
        let current = this.head,
        found = false;
        while (current !== null && !found) {
            if (current.getData() === item) {
                found = true;
            } else {
                current = current.getNext();
            }
        }
        return found;
    }

    delete (item) {
        let current = this.head,
        previous = null,
        found = false;
        while (current !== null && !found) {
            if (current.getData() === item) {
                found = true;
            } else {
                previous = current;
                current = current.getNext();
            }
            if (found) {
                if (previous === null) {
                    this.head = current.getNext();
                } else {
                    previous.setNext(current.getNext())
                }
            } else {
                throw ValueError;
                console.log("Value Not Found")
            }
        }
    }

    insert (position, item) {
        if (position > (this.size() - 1)) {
            console.error("Index Out Of Bounds");
        }
        let current = this.head,
        previous = null,
        pos = 0;
        if (position === 0) {
            this.add(item);
        } else {
            let new_node = new Node(item);
            while (pos < position) {
                pos += 1;
                previous = current;
                current = current.getNext();
            previous.setNext(new_node);
            new_node.setNext(current);
            }
        }
    }

    indexOf (item) {
        let current = this.head,
        pos = 0,
        found = false;
        while (current !== null && !found) {
            if (current.getData === item) {
                found = true;
            } else {
                current = current.getNext();
                pos += 1;
            }

            if (!found) {
                pos = null;
            }
            return pos;
        }
    }

    pop (position = null) {
        if (position > this.size()) {
            console.error("Index Not Found");
        }
        let current = this.head;
        if (position === null) {
            let ret = current.getData();
            this.head = current.getNext();
        } else {
            let pos = 0,
            previous = null;
            while (pos < position) {
                previous = current;
                current = current.getNext();
                pos += 1;
                ret = current.getData();
            }
            previous.setNext(current.getData());
            console.log(ret);
            return ret;
        }
    }

    append (item) {
        let current = this.head,
        previous = null,
        pos = 0,
        length = this.size();
        while (pos < length) {
            previous = current;
            current = current.getNext();
            pos += 1;
        }
        let new_node = new Node(item);
        if (previous === null) {
            new_node.setNext(current)
            this.head = new_node
        } else {
            previous.setNext(new_node)
        }
    }

    printList () {
        let current = this.head;
        while (current !== null) {
            console.log(current.getData())
            current = current.getNext();
        }
    }
}


const listExamp = new linkedList()
listExamp.add('l')
listExamp.add('H')
listExamp.insert(1, 'e')
listExamp.append('l')
listExamp.append('o')
listExamp.printList()