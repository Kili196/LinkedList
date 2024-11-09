


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
            currentNode.nextNode = newNode;

        }
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let tailNode = this.head;




        while (tailNode.nextNode != null) {
            tailNode = tailNode.nextNode;
        }


        return tailNode;
    }

    at(index) {
        if (index >= this.length) {
            return new Error("Index out of bounce")
        }
        else {
            if (index == 0) {
                return this.head;
            }
            else {
                let count = 0;
                let currentNode = this.head;
                while (count != index) {
                    currentNode = currentNode.nextNode;
                    count++;
                }

                return currentNode;
            }
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
        let currentNode = this.head;

        while (currentNode != null) {
            if (currentNode.data == value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        return false;
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

        while (currentNode) {
            linkedListOutPut += `( ${currentNode.data} ) => `
            currentNode = currentNode.nextNode;

        }
        linkedListOutPut += "( null )"
        return linkedListOutPut;
    }


}


class HashMap {
    constructor() {
        this.hashMap = [[], [], [], [], [], [], []];
        this.loadFactor = 0.75;
        this.capacity = this.hashMap.length * this.loadFactor;



    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        const hash = this.hash(key);
        const bucketIndex = hash % this.hashMap.length;

        if (this.hashMap[bucketIndex][0] == null) {
            let linkedListOfValues = new LinkedList();
            linkedListOfValues.append({ [key]: value });
            this.hashMap[bucketIndex][0] = linkedListOfValues;
        }
        else {
            let linkedListOfValues = this.hashMap[bucketIndex][0];
            linkedListOfValues.append({ [key]: value });
        }



    }

    resizeMap() {
        this.capacity = this.capacity * 2;
        this.hashMap = new Array();


        this.entries = new Array();

        for (let i = 0; i < this.capacity; i++) {
            this.hashMap.push(new Array());
        }



    }

    entries() {
        console.log(this.entries)

    }
}



const hashMap = new HashMap();


hashMap.set("Hallo", "Kili");
hashMap.set("Hallo", "Kili");


console.log(hashMap);



