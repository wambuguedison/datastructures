#A simpler implementation
class node:
    def __init__(self, data = None, next = None) :
        self.data = data
        self.next = next
    
class linked_list :
    def __init__(self) :
        self.head = None
    
    def addToFront(self, data) :
        self.head = node(data = data, next = self.head)

    def isEmpty(self) :
        return self.head == None

    def addAtEnd(self, data) :
        if not self.head :
            self.head = node(data = data)
            #return
        curr = self.head
        while curr.next :
            curr = curr.next
        curr.next = node(data = data)

    def deleteNode(self, key) :
        curr = self.head
        prev = None
        while curr and curr.data != key :
            prev = curr
            curr = curr.next
        if prev is None :
            self.head = curr.next
        elif curr :
            prev.next = curr.next
            curr.next = None

    def getLastNode(self) :
        temp = self.head
        while(temp.next is not None) :
            temp = temp.next
        return temp.data

    def printList(self) :
        node = self.head
        while node != None :
            print (node.data, end=" => ")
            node = node.next


if __name__ == "__main__" :
    s = linked_list()
    s.addToFront(5)
    s.deleteNode(5)
    s.addToFront(8)
    s.addAtEnd("end")
    print (s.getLastNode())
    s.printList()

    print("\n")

#A more complex implementation
class Node :
    def __init__(self, val) :
        self.data = val
        self.next = None

    def getData(self) :
        return self.data

    def getNext(self) :
        return self.next
    
    def setData(self, val):
        self.data = val
    
    def setNext(self, val):
        self.next = val

class linkedList :
    def __init__(self) :
        self.head = None

    def isEmpty(self) :
        """Check if List is Empty """
        return self.head is None

    def add(self, item) :
        """Add Item to list """
        new_node = Node(item)
        new_node.setNext(self.head)
        self.head = new_node

    def size(self) :
        """Return Length / Size of the list """
        count = 0
        current = self.head
        while current is not None:
            count += 1
            current = current.getNext()
        return count

    def search(self, item) :
        """Search if item is in list """
        current =  self.head
        found = False
        while current is not None and not found :
            #will try en optimize later
            if current.getData() is item :
                found = True
            else :
                current = current.getNext()
        return found

    def remove(self, item) :
        """REmove item in list; If not found Raise ValueError """
        current = self.head
        previous = None
        found = False
        while current is not None and not found :
            if current.getData() is item :
                found = True
            else :
                previous = current
                current = current.getNext()
            if found:
                if previous is None :
                    self.head = current.getNext()
                else :
                    previous.setNext(current.getNext())
            else :
                raise ValueError
                print ("value Not Found")

    def insert(self, position, item) :
        """Insert item in specified position and if position is out of bounds, raise IndexError"""
        if position > self.size() - 1 :
            raise IndexError
            print ("Index Out of Bound")
        current = self.head
        previous = None
        pos = 0
        if position is 0 :
            self.add(item)
        else :
            new_node = Node(item)
            while pos < position :
                pos += 1
                previous = current
                current = current.getNext()
            previous.setNext(new_node)
            new_node.setNext(current)

    def index(self, item) :
        """Return Index of item, if not found return None"""
        current = self.head
        pos = 0
        found = False
        while current is not None and not found :
            if current.getData() is item :
                found = True
            else :
                current = current.getNext()
                pos += 1

        if found:
            pass
        else :
            pos = None
        return pos
	
    def pop(self, position = None) :
        """
            If no argument is provided, return and remove the item at the head
            If pos is provided, return and remove the item at the position
            If index is out of bounds raise IndexError
        """
        if position > self.size() :
            raise IndexError
            print ("Index Not found")
        
        current = self.head
        if position is None :
            ret = current.getData()
            self.head = current.getNext()
        else :
            pos = 0
            previous = None
            while pos < position :
                previous = current
                current = current.getNext()
                pos += 1
                ret = current.getData()
            previous.setNext(current.getNext())
        print (ret)
        return ret

    def append(self, item) :
        """Append item to end of list """
        current = self.head
        previous = None
        pos = 0
        length = self.size()
        while pos < length :
            previous = current
            current = current.getNext()
            pos += 1

        new_node = Node(item)
        if previous is None :
            new_node.setNext(current)
            self.head = new_node
        else :
            previous.setNext(new_node)

    def printList(self) :
        current = self.head
        while current is not None:
            print (current.getData())
            current = current.getNext()

if __name__ == "__main__" :
    listExamp = linkedList()
    listExamp.add('l')
    listExamp.add('H')
    listExamp.insert(1, 'e')
    listExamp.append('l')
    listExamp.append('o')
    print(listExamp.index("H"))
    listExamp.printList()