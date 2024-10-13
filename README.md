# Oral Assessment

This repository contains solutions for the LinkedList Manipulation and Temperature Converter tasks.

# 1. LinkedList Manipulation (TypeScript)

# Overview

A TypeScript implementation of a singly linked list with methods to:

add: Add elements.

remove: Remove elements by value.

find: Find elements.

printList: Display the list.

# Project Structure

LinkedList.ts: Contains the main implementation of the linked list class and methods for adding, removing, finding, and printing elements.

LinkedList.js: The compiled JavaScript file generated from the TypeScript source.

# How to Run

Install TypeScript (if not already installed):

```bash
npm install -g typescript
```

Compile the TypeScript file:

```bash
tsc LinkedList.ts
```

Run the compiled file:

```bash

node LinkedList.js

```

# Example Usage:

```bash
const list = new MyLinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1, 2, 3

list.remove(2);
list.print(); // Output: 1, 3

const foundNode = list.find(3);
if (foundNode) {
    console.log(`Found node with value: ${foundNode.value}`);
} else {
    console.log("Node not found");
}
```
# Output

```bash
Added value: 1
Added value: 2
Added value: 3
1
2
3
Removed value: 2
1
3
Found value: 3
Found node with value: 3
```

# 2. Temperature Converter (React, TypeScript)

# Overview

A class-based React component that converts temperatures between Celsius and Fahrenheit.

# How to Run

# Set up a React project:
```bash

npx create-react-app temperature-converter --template typescript

```
Replace App.tsx with the provided code.

Start the app:
```bash
npm start

```
# Requirements
Node.js, npm, TypeScript, and React installed.
