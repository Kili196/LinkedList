


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
            if (Object.keys(currentNode.data) == value) {
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

        while (Object.keys(currentNode.data) != value) {
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

    getNodeFromList() {
        let currentNode = this.head;
        let entries = [];

        while (currentNode) {
            entries.push(currentNode.data);
            currentNode = currentNode.nextNode;

        }

        return entries;
    }


}


class HashMap {
    constructor() {
        this.hashMap = [[], [], [], [], [], [], []];
        this.loadFactor = 0.75;
        this.capacity = 7;
        this.length = 0;
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

        const entry = { [key]: value }


        if (this.hashMap[bucketIndex][0] == null) {

            let linkedListOfValues = new LinkedList();
            linkedListOfValues.append(entry);
            this.hashMap[bucketIndex][0] = linkedListOfValues;
            this.length++;
        }
        else {
            let linkedListOfValues = this.hashMap[bucketIndex][0];

            if (linkedListOfValues.find(key) != null) {
                linkedListOfValues.at(linkedListOfValues.find(key)).data[key] = value;
                return;
            }
            this.length++;
            linkedListOfValues.append(entry);
        }
        if (this.length > this.capacity * this.loadFactor) {
            this.resizeMap();
        }
    }

    get(key) {
        for (let i = 0; i < this.hashMap.length; i++) {
            let foundLinkedList = this.hashMap[i][0];
            if (foundLinkedList != null) {
                if (foundLinkedList.contains(key)) {
                    return foundLinkedList.at(foundLinkedList.find(key));
                }
                return null;
            }
        }
    }

    resizeMap() {
        this.capacity = this.capacity * 2;
        this.length = 0;
        let entries = hashMap.getEntries();
        this.hashMap = [];
        for (let i = 0; i < this.capacity; i++) {
            this.hashMap.push(new Array());
        }


        entries.forEach((entries) => {
            entries.forEach((entry) => {

                hashMap.set(Object.keys(entry)[0], Object.entries(entry)[0]);
            })

        })






    }

    getEntries() {
        let entries = [];

        this.hashMap.forEach((entry) => {
            if (entry[0]) {
                entries.push(entry[0].getNodeFromList());
            }
        })

        return entries;



    }
}



const hashMap = new HashMap();


hashMap.set("eins", "Kili");
hashMap.set("zwei", "Kili");
hashMap.set("drei", "Kili");
hashMap.set("vier", "Kili");
hashMap.set("fünf", "Kili");
hashMap.set("six", "Kili");
hashMap.set("ssdaix", "Kili");
hashMap.set("sasddsax", "Kili");
hashMap.set("sidsadsaasdx", "Kili");
hashMap.set("sidsadsaasdx", "Kasdsadili");


console.log(hashMap)











