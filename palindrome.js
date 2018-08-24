// Function Palindorme
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Reverses a String
function reverse(string) {
  return Array.from(string).reverse().join("");
}
