function myFunc() {
  console.log(arguments[0]);
}

myFunc(1, 2, 3); // Output: 1

//In this code, arguments object is used to get the first argument passed to myFunc function. However, using arguments object directly is generally not recommended.

// The problem lies in the use of arguments. It is an array-like object, which means it does not have all the methods of arrays.

// for example, forEach loop does not work directly on arguments object.
// myFunc.forEach(console.log) will throw error