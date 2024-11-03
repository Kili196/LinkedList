class ListNode {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }


    append(data) {
        this.length++;
        const newNode = new ListNode(data);



        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;

            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }

            if (currentNode.nextNode == null) {
                currentNode.nextNode = newNode;
            }
        }
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        let tailNode = this.head;

        if (tailNode.nextNode == null) {
            return tailNode;
        }

        else {
            while (tailNode.nextNode != null) {
                tailNode = tailNode.nextNode;
            }
        }

        return tailNode;
    }

    at(index) {
        if (index == 0) {
            return this.head;
        }
        else {
            let count = 0;
            let currentNode = this.head;
            while (count != index) {

                if (index >= this.length) {
                    return new Error("Index out of bounce")
                }

                currentNode = currentNode.nextNode;
                count++;
            }

            return currentNode;
        }
    }

    pop() {

        if (this.length == 0) {
            throw new Error("Cant pop from empty list");
        }
        else {
            if (this.length == 1) {
                this.head = null;
                this.length--;
            }
            else {
                let currentNode = this.head;
                let oldCurrentNode;
                while (currentNode.nextNode != null) {
                    oldCurrentNode = currentNode;
                    currentNode = currentNode.nextNode;
                }

                this.length--;
                oldCurrentNode.nextNode = null;
            }
        }
    }

    prepend(value) {
        let newNode = new ListNode(value);
        this.length++;

        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let tempNode = this.head;
            this.head = newNode;
            this.head.nextNode = tempNode;
        }
    }

    contains(value) {
        let contains = false;

        let currentNode = this.head;

        while (currentNode.nextNode != null) {
            if (currentNode.data == value) {
                contains = true;
            }

            currentNode = currentNode.nextNode;
        }

        if (currentNode.data == value) {
            contains = true;
        }

        return contains;
    }

    find(value) {
        if (!this.contains(value)) {
            return null;
        }

        let currentNode = this.head;
        let count = 0;

        while (currentNode.data != value) {
            count++;
            currentNode = currentNode.nextNode;
        }

        return count;

    }

    toString() {
        let linkedListOutPut = "";
        let currentNode = this.head;



        while (currentNode.data != null) {
            console.log(currentNode.data)
            linkedListOutPut += `( ${currentNode.data} ) => `
            if (currentNode.nextNode == null) {
                break;
            }
            currentNode = currentNode.nextNode;

        }

        linkedListOutPut += "( null )"


        return linkedListOutPut;
    }


}


const linkedList = new LinkedList();
linkedList.append("data");




console.log(linkedList.toString())
















