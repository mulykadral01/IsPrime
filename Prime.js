function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(isPrime(1));    // Output: false
console.log(isPrime(2));    // Output: true
console.log(isPrime(-1));   // Output: false
