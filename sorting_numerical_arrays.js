function numberCompare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  let a = [99, 17, 42, 8];
  console.log(`The array of 'a' is: ${a}`);

  console.log(`The sort of the array 'a' alphabatically is: ${a.sort()}`);

  console.log(`Sorting with the function numberCompare is : ${a.sort(numberCompare)}`);

function square (x) {
  return x * x;
}

console.log("The function square of 2 is: " + square(2));

let altSquare = (y) => {
  return y * y;
}

console.log("The function altSquare with fat arrow of 3 is: " + altSquare(3));
