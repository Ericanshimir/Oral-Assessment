// Node class representing each element in the LinkedList
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class with methods to add, remove, and find elements
class LinkedList<T> {
    head: Node<T> | null = null;

    // Add a new element to the linked list
    add(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove an element from the linked list
    remove(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Find and return a node with the specified value
    find(value: T): Node<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Print all elements in the linked list (for testing purposes)
    print(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1, 2, 3
list.remove(2);
list.print(); // Output: 1, 3
