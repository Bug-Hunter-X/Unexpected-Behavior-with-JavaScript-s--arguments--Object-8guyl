function myFunc(...args) {
  args.forEach(arg => console.log(arg));
}

myFunc(1, 2, 3); // Output: 1, 2, 3

// or, alternatively

function myFunc(){
  const argsArray = Array.from(arguments);
  argsArray.forEach(arg => console.log(arg));
}

myFunc(1,2,3); // Output: 1, 2, 3