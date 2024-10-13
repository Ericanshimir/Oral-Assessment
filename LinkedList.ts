class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class MyLinkedList<T> {
    head: ListNode<T> | null = null;

    add(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        console.log(`Added value: ${value}`);
    }

    remove(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            console.log(`Removed value: ${value}`);
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
            console.log(`Removed value: ${value}`);
        }
    }

    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                console.log(`Found value: ${value}`);
                return current;
            }
            current = current.next;
        }
        console.log(`Value ${value} not found`);
        return null;
    }

    print(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

<<<<<<< Updated upstream
// Example:
const list = new LinkedList<number>();
=======
// Example usage
const list = new MyLinkedList<number>(); 
>>>>>>> Stashed changes
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1, 2, 3

list.remove(2);
list.print(); // Output: 1, 3

const foundNode = list.find(3);
if (foundNode) {
    console.log(`Found node with value: ${foundNode.value}`); // Output: Found node with value: 3
} else {
    console.log("Node not found");
}

// If you need another list, use a different variable name like 'anotherList'
const anotherList = new MyLinkedList<number>(); 
anotherList.add(4);
anotherList.add(5);
anotherList.print(); // Output: 4, 5
