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


    return { head, append, prepend, toString }
}

const test = LinkedList();
test.append(2)
test.prepend(6)
test.toString();
