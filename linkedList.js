function Node(value = null, next = null) {
    return { value, next };
}

function LinkedList() {
    this.head = null;

    //Add value to end of list
    function append(value) {
        let node = Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }
            tail.next = node;
        }

    }

    //add value to front of list
    function prepend(value) {
        let node = Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
        }

    }

    //prints list as a string
    function toString() {
        let stringList = ""
        if (this.head === null) {
            stringList = "( empty ) "
        } else {
            let temp = this.head;
            while (temp.next != null) {
                stringList += "( " + temp.value + " ) -> ";
                temp = temp.next;
            }
            stringList += "( " + temp.value + " )";
        }
        console.log(stringList);
    }

    function size(){
        let listSize = 0;
        if (this.head === null) {
            listSize = 0;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                listSize++;
                temp = temp.next;
            }
            listSize++
        }
        console.log(listSize);
    }

    function returnHead(){
        if (this.head === null) {
            return null;
        } else {
            return this.head;
        }
    }

    function returnTail(){
        if (this.head === null) {
            return null
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            return temp;
        }
    }

    //Returns the node at a given index
    function atIndex(value){
        if(value <= 0){
            return "Index must be at least 1"
        }
        if (this.head === null) {
            return "List doesn't have any values"
        } else {
            let temp = this.head;
            for(let i = 1; i < value; i++){
                if(temp.next != null) {
                    temp = temp.next;
                } else {
                    return "Index does not exist in this list"
                }
            }
            return temp;
        }
    }

    //Removes last node from list
    function pop(){
        if (this.head === null) {
            return null
        } else {
            let temp = this.head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = null
        }
    }

    //Returns true if list contains value returns false otherwise
    function contains(value){
        let test = value;
        let bool = false;
        if (this.head === null) {
            return bool;
        } else {
            let temp = this.head;
            while (temp != null) {
                if (temp.value === test){
                    bool = true;
                }
                temp = temp.next;
            }
            return bool;
        }
    }

    //Finds the index of a node that contains value or null if it doesnt exist
    function find(value){
        let test = value;
        let index = 1;
        if (this.head === null) {
            return null
        } else {
            let temp = this.head;
            while (temp != null) {
                if (temp.value === test){
                    return index;
                }
                index++
                temp = temp.next;
            }
            return null;
        }
    }


    return {head, append, prepend, toString, size, returnHead, returnTail, atIndex, pop, contains, find }
}

const test = LinkedList();
test.append(2)
test.append(3)
test.append(4)
test.prepend(1)
test.size();
test.toString();
const header = test.returnHead()
const tailer = test.returnTail()
const atIndexTest = test.atIndex(2);
test.pop();
test.toString();
const containsTest = test.contains(2);
const findTest = test.find(19);
console.log(findTest)



