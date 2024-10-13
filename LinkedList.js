var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.value = value;
    }
    return ListNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.head = null;
    }
    MyLinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        console.log("Added value: ".concat(value));
    };
    MyLinkedList.prototype.remove = function (value) {
        if (!this.head)
            return;
        if (this.head.value === value) {
            this.head = this.head.next;
            console.log("Removed value: ".concat(value));
            return;
        }
        var current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
            console.log("Removed value: ".concat(value));
        }
    };
    MyLinkedList.prototype.find = function (value) {
        var current = this.head;
        while (current !== null) {
            if (current.value === value) {
                console.log("Found value: ".concat(value));
                return current;
            }
            current = current.next;
        }
        console.log("Value ".concat(value, " not found"));
        return null;
    };
    MyLinkedList.prototype.print = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    };
    return MyLinkedList;
}());
// Example usage
var list = new MyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1, 2, 3
list.remove(2);
list.print(); // Output: 1, 3
var foundNode = list.find(3);
if (foundNode) {
    console.log("Found node with value: ".concat(foundNode.value)); // Output: Found node with value: 3
}
else {
    console.log("Node not found");
}
// If you need another list, use a different variable name like 'anotherList'
var anotherList = new MyLinkedList();
anotherList.add(4);
anotherList.add(5);
anotherList.print(); // Output: 4, 5
