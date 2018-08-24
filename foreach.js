let a = ["ant", "bat", "cat", 42];
a.forEach(function(element){
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
  console.log(character);
});

// forEach using fat arrow
let b = ["oi", "olá", "valeu", 10];
b.forEach (array => {
  console.log(array);
});

let c = [99, 17, 42, 8];
c.sort(function(c, d) {
  return c - d;
});
console.log(c);
