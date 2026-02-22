# JavaScript

## What is JavaScript?

#### A High-Level, Multi-Paradigm, Object-Oriented, Interpreted, Single-Threaded(executes commands sequentially, First-Class-Functions(treated as variables) one at a time) and Garbage-Collected Programming Language.

#### JavaScript is best described as a just-in-time (JIT) compiled language, meaning it uses a hybrid approach that combines aspects of both interpretation and compilation. It is not purely one or the other.

## ✅Strict Mode

#### Use strict mode for safe javascript coding, it will show proper error messages.

```bash
"use strict"
```

## ✅Statements vs Expressions

#### An expression evaluates to a value, while a statement performs an action and does not, by itself, produce a value that can be used elsewhere in the code

## ✅Functions

#### A reusable block of code that performs a specific task or calculates a value when it is called or "invoked"

```bash
function myFunc() {}

const myFunc = () => {}

function () {}

function myFunc(a, b) {}
```

### Functions declaration vs expression

#### Syntax

Refers to how a function is written in JavaScript, either as a
function declaration using the function keyword or as a function expression assigned to a variable.

#### Availability

Means when the function can be used in the code—function declarations can be called
anywhere in their scope, while function expressions can only be called after they are defined.

#### Hoisting

Is JavaScript’s behavior of moving declarations to the top of their scope before execution;
function declarations are fully hoisted, but in function expressions only the variable name is hoisted, not the function itself.

## ✅Arrow Functions

####

## ✅Array Destructuring

#### Is an ES6 (ECMAScript 2015) feature that allows you to extract values from an array and assign them to distinct variables in a concise and readable way

```bash
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); // Output: Banana
console.log(fruit2); // Output: Orange
console.log(fruit3); // Output: Apple

// Rest Syntax (...)
const numbers = [10, 20, 30, 40, 50];
const [a, b, ...rest] = numbers;

console.log(a);    // Output: 10
console.log(b);    // Output: 20
console.log(rest); // Output: [30, 40, 50]
```

## ✅Objects Destructuring

#### Is an ES6+ JavaScript feature that allows you to unpack properties from objects and bind them to variables in a concise and readable way

```bash
const user = {
  id: 42,
  isVerified: true
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true

// Rest Syntax (...)
const person = { name: "Sarah", country: "Nigeria", job: "Developer" };
const { name, ...others } = person;

console.log(name); // Sarah
console.log(others); // { country: "Nigeria", job: "Developer" }
```

## ✅Spread Operator

#### Is a powerful feature that allows an iterable (like an array or string) to be expanded into individual elements

```bash
const original = { name: "Alice", age: 30 };
const copy = { ...original };

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']
```
