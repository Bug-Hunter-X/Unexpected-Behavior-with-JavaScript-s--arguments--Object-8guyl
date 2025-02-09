# JavaScript Arguments Object Bug

This repository demonstrates a common, yet subtle, bug related to JavaScript's `arguments` object.  The `arguments` object is array-like but does not support all the methods of a standard JavaScript array.  This can lead to unexpected errors and unexpected behavior in your code.

## Bug Description
The bug showcases the issue when attempting to use array methods, like `forEach`, directly on the `arguments` object.

## Solution
The solution demonstrates how to correctly use `arguments` either by converting it into an array using `Array.from` or using a rest parameter. Using rest parameter provides a more modern and efficient approach.

## How to reproduce
1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js).
3. Observe that the code throws an error when using `forEach` on `arguments`. 
4. Open `bugSolution.js` and run it to see how to properly use `arguments` and iterate over the arguments passed to the function.