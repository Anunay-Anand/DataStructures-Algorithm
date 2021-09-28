// 1) Fizz Buzz
const fizzBuzz = (n) => {
  let i = 1;
  let res = [];
  while (i <= n) {
    let ans =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : `${i}`;
    res.push(ans);
    i++;
  }
  return res;
};

// 2) Prime Numbers with (Sieve of Eratosthenes)
const countPrimes = (n) => {
  // Create an Array with index n+1 and fill it with 1 (boolean true)
  let primes = new Array(n + 1).fill(1);
  //Result counter
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === 1) {
      count++;
      // Boolean false all the multiples of 2 and following numbers
      for (let j = i * i; j <= n; j += i) {
        primes[j] = 0;
      }
    }
  }
  return count;
};

// 3) Check if the number is divisible by 3
// There are two methods to check if a number is an integer (n%1 === 0 if this is true)
// OR we can check with .isInteger() method

// We need to make sure that it is completely divisible by 3 or not.
var isPowerOfThree = function (n) {
  while (n !== 1) {
    if (n % 3 !== 0 || n <= 2) {
      return false;
    }
    n = n / 3;
  }
  return true;
};
