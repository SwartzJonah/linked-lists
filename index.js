function Node(value = null, next = null) {
    return { value, next };
}

function LinkedList() {
    let head = null;

    function append(value){
        let node = Node(value);
        console.log(node);
        if (this.head === null) {
            this.head = node;
        } else {
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }
            tail.next = node;
        }
        console.log(this)
    }

    return {head, append}
}

const test = LinkedList();
console.log(test.append(2))
console.log(test.append(4))