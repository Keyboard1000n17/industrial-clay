// Single-line comment
/* Multi-line
   comment */

"use strict";

// Imports / exports
import fs from "fs";
export const exportedVar = 42;

// Constants and variables
const PI = 3.14159;
let mutable = null;
var legacy = undefined;

// Numbers
const num = 123;
const float = 123.456;
const hex = 0xff;
const binary = 0b1010;
const big = 123n;

// Strings
const single = 'single quote';
const double = "double quote";
const template = `template string with ${num} and ${PI}`;

// Regex
const regex = /hello\s+world/gi;

// Functions
function add(a, b) {
  return a + b;
}

const arrow = (x) => x * 2;

async function asyncFunc() {
  await Promise.resolve("done");
}

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Woof!");
  }
}

// Objects & destructuring
const obj = {
  key: "value",
  nested: {
    arr: [1, 2, 3]
  }
};

const { key, nested: { arr } } = obj;

// Optional chaining / nullish
const maybe = obj?.missing ?? "default";

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (false) {}
do {} while (false);

// Conditionals
if (true && !false) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// Switch
switch (num) {
  case 1:
    break;
  default:
    break;
}

// Try / catch / finally
try {
  throw new Error("Test error");
} catch (e) {
  console.error(e.message);
} finally {
  console.log("cleanup");
}

// Operators
const ops = (1 + 2) * 3 / 4 % 5 ** 2;

// Arrays
const arr2 = [1, 2, 3].map(n => n * 2);

// DOM (if in browser)
document?.querySelector("#app")?.classList.add("active");

// Debugger keyword
debugger;

// Labels (rare)
loopLabel:
for (let i = 0; i < 1; i++) {
  break loopLabel;
}

// Basic escapes
const newline = "Line 1\nLine 2";
const tab = "Column1\tColumn2";
const carriage = "Hello\rWorld";
const backspace = "Hello\bWorld";
const formfeed = "Hello\fWorld";
const verticalTab = "Hello\vWorld";

// Quotes and backslash
const quotes = "He said \"Hello\"";
const singleQuote = 'It\'s fine';
const backslash = "This is a backslash: \\";

// Null char
const nullChar = "Null:\0End";

// Hex escapes
const hex = "\x41\x42\x43"; // ABC

// Unicode escapes
const unicodeBasic = "\u0041\u0042\u0043"; // ABC
const unicodeCodePoint = "\u{1F600}"; // 😀


// Template strings with escapes
const template = `Line1\nLine2\tTabbed ${42}`;

// Escapes in regex
const regex = /\n\t\r\s\w\d\\\//g;
const regexToo = /lorem ipsum dolor sit amet/

// Invalid / edge cases (should still highlight distinctly)
const invalid1 = "\xZZ";      // invalid hex
const invalid2 = "\u00ZZ";    // invalid unicode
const invalid3 = "\u{}";      // invalid code point

// Mixed chaos
const chaos = "Mix: \n \t \x41 \u0042 \u{43} \\ \" \'";

// JSON-style string (common edge case)
const jsonLike = "{\"key\": \"value\\n\"}";

const rando = Symbol("random");