// anonymous function map
let anonymousFunction = [1, 2, 3, 4].map(function(n) { return n * n;});
console.log(anonymousFunction);

// fat arrow map
let fatArrow = [1, 2, 3, 4].map( (n) => { return n * n;});
console.log(fatArrow);

//case of a function of a single argument,
//JavaScript allows us to omit the parentheses, curly braces
let compactFunction = [1, 2, 3, 4].map(n =>  n * n);
console.log(compactFunction);
