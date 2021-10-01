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

// 4) Valid Paranthesis

function isValid(s) {
  // Index of string
  let i = 0;
  // Bracket object
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  // Stack for verifying right brackets
  const stack = [];
  while (i < s.length) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (brackets[stack.pop()] !== s[i]) {
        return false;
      }
    }
    i++;
  }
  return stack.length === 0;
}

// 5) Missing Number

var missingNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result + i + 1 - nums[i];
  }

  return result;
};

// 6) Stack design

MinStack.prototype.push = function (x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};
/**

 @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements.pop();
};
/**

 @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};
/**

 @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};
