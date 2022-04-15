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

// 7) First Bad design

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    //         We are returning mid only. This is why end + 1;
    return end + 1;
  };
};

// 8) Squared of Sorted Arrays

const sortedSquares = (nums) => {
  let mid;
  let odd = [];
  let even = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] < 0) {
      odd.push(nums[i] * nums[i]);
    } else {
      even.push(nums[i] * nums[i]);
    }
  }

  // Now Sort the array and merge
  let x = odd.length - 1;
  let y = 0;
  let index = 0;
  while (index <= nums.length - 1) {
    if (odd[x] < even[y] || even[y] === undefined) {
      nums[index] = odd[x];
      x--;
    } else {
      nums[index] = even[y];
      y++;
    }
    index++;
  }
  return nums;
};

// 9) Pow(x,n)

// Brute force without methods O(n) O(1)

const myPowSlow = function (x, n) {
  // declare and initiate identifiers required
  let ans = x;
  let count = 2;
  // Check for edge case
  if (n === 0) return 1;
  // Loop until count is less than n
  while (count <= Math.abs(n)) {
    ans = ans * x;
    count++;
  }
  // check if n was -ve or +ve
  return n < 0 ? 1 / ans : ans;
};

// Brute Force approach fast O(n) time and O(1) space

const myPow = function (x, n) {
  // check for edge cases
  // if(n === 0) return 0;
  // Check if n is +ve
  if (n > 0) {
    return x ** n;
  } else {
    n = Math.abs(n);
    return 1 / x ** n;
  }
};

// Optimal Approach

const myPowOptimized = function (x, n) {
  // declare and initiate identifiers required
  let ans = 1.0;
  let power = Math.abs(n);
  // Loop until count is greater than 0
  while (power > 0) {
    // If the power is even or if the power is odd
    if (power % 2 === 0) {
      x = x * x;
      power = power / 2;
    } else {
      ans = ans * x;
      power = power - 1;
    }
  }
  // Check if n was -ve
  return n < 0 ? 1 / ans : ans;
};

// Recursion & BackTracking

// 10) Subset Sums
// We need to get all possible subset from a set. It will always be
// 2^n where n is number of elements in array

// Q) Brute Force
// Ans) We will use power set which uses bit manipulation in the backend to find the answer.
// It takes 2^n * N times to generate all the subsets.

// Recursive Solution
// Here basically we have 2 conditions for each index.. we can either pick it up or not pick it up
// It is basically 2! * N or 2^N
// TC - O(2^n)+ O(2^n log(2^n)) // each index has 2 ways + sorting
// SC - O(2^n) // because 2^n subsets can be generated

function subsetSums(arr, n) {
  // Define the identifiers
  let ans = []; // To store the entire sum string

  function subset(index, arr, n, sum) {
    // Define the case of termination
    if (n === index) {
      // Store the sum in ans
      ans.push(sum);
      return;
    }
    // Element is picked/ added to sum
    subset(index + 1, arr, n, sum + arr[index]);
    // Element is not picked/ added to sum
    subset(index + 1, arr, n, sum);
  }
  subset(0, arr, n, 0);
  return ans.sort((a, b) => a - b);
}

// 11) Subset Sum - II

// Brute Force solution TC - O(nlogn + 2^N) SC - O(2^N * logn(insertion in set))

const subsetsWithDup = (nums) => {
  // Define the identifiers required
  let set = new Set(); // It is used to store the complete values of recursion
  let state = []; // to store each state.
  let res = [];

  // We need to sort the sum in advance
  nums.sort((a, b) => a - b);
  // Define the function
  function findSubSet(index, state) {
    // define the case of termination
    if (index === nums.length) {
      // Check if the state is already there in map
      if (!set.has(state.join(","))) {
        set.add(state.join(","));
        res.push(state);
      }
      return;
    }
    // Recursively add to state and not in the other
    findSubSet(index + 1, [...state, nums[index]]);
    findSubSet(index + 1, state);
  }
  findSubSet(0, state);
  return res;
};

// Optimized solution
// TC - O(k*2^n) where 2^n to generate every subset and O(k) to insert subset into another DSA.

const subsetsWithDupOP = (nums) => {
  // Define the identifiers required
  // let state is used to store each state.
  let res = []; // to store final result

  // We need to sort the sum in advance
  nums.sort((a, b) => a - b);
  // Define the function
  function findSubSet(index, state) {
    // define the case of termination
    res.push(state);
    for (let i = index; i < nums.length; i++) {
      // Check if current index is the first index or the last index and current index aren't same
      if (i === index || nums[i] !== nums[i - 1]) {
        findSubSet(i + 1, [...state, nums[i]]);
      }
    }
    return;
  }
  findSubSet(0, []);
  return res;
};

// 12) Combination Sum
//  O(2^t * k) where t is the target, k is the average length (putting k data structure into another DS)
// t because if t = 10 and ele = 1... we can have pick non pick, pick non pick upto 10.
// Space Complexity: O(k*x), k is the average length and x is the no. of combinations
// There might be a chance where we can't find target until last element
// In such a case we will have to pick or not pick each element once 2! * N
// k is the avg length of subset generated during each such recursion calls

const combinationSum = (nums, target) => {
  // define the identifiers required
  let res = []; // It will store the final result
  // let state = [] It will store the state
  // let sum identifiers be used to store the sum

  // Define the function
  function findTarget(idx, target, state) {
    // Define the case of termination
    if (target < 0 || idx === nums.length) {
      return;
    }
    if (target === 0) {
      res.push(state);
      return;
    }
    // Recursively call if target is less than nums
    if (nums[idx] <= target) {
      findTarget(idx, target - nums[idx], [...state, nums[idx]]);
    }
    findTarget(idx + 1, target, state);
  }
  // invoke the function
  findTarget(0, target, []);
  return res;
};

// 13) Combination Sum 2

// Brute Force TC - O(2^n * logn * K)

const combinationSum2 = (candidates, target) => {
  // Define the identifiers required
  let res = []; // it will store the result of all subarrays
  let set = new Set(); // to store subset only once

  // Sort all the candidates
  candidates.sort((a, b) => a - b);

  // Define the function to find solution
  function findTargetSum(idx, target, state) {
    // Check if sum found
    if (target === 0) {
      // check if already there
      if (!set[state]) {
        set[state] = state;
        // Push the current state in res
        res.push(state);
      }
      return;
    }
    // Check for the case of termination
    if (idx === candidates.length || target < 0) {
      return;
    }
    // Once we will select the element and the next time we will not
    if (candidates[idx] <= target) {
      findTargetSum(idx + 1, target - candidates[idx], [
        ...state,
        candidates[idx],
      ]);
    }
    findTargetSum(idx + 1, target, state);
  }
  findTargetSum(0, target, []);
  return res;
};

// Optimmized Solution
// Time Complexity:O(2^n*k)
// Space Complexity:O(k*x)

const combinationSum2Optimized = (candidates, target) => {
  // Define the identifiers required
  let res = []; // it will store the result of all subarrays

  // Sort all the candidates
  candidates.sort((a, b) => a - b);

  // Define the function to find solution
  function findTargetSum(idx, target, state) {
    // Check if sum found
    if (target === 0) {
      // Store the subset in result
      res.push(state);
      return;
    }
    // Check for the case of termination
    if (idx === candidates.length || target < 0) {
      return;
    }
    // We will create a for loop while taking only subsequences
    for (let i = idx; i < candidates.length; i++) {
      // Also check if the curr i is equal to the next i
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      // In the case where the value of curr idx is smaller than target
      if (candidates[i] <= target) {
        findTargetSum(i + 1, target - candidates[i], [...state, candidates[i]]);
      } else {
        break;
      }
    }
  }
  findTargetSum(0, target, []);
  return res;
};

// 14) Find the kth Permutation

// Brute Force by recursion..
// TC - O(n! * n) n = deep copy of every permutation SC - (K)

// void solve(string & s, int index, vector < string > & res) {
//   if (index == s.size()) {
//     res.push_back(s);
//     return;
//   }
//   for (int i = index; i < s.size(); i++) {
//     swap(s[i], s[index]);
//     solve(s, index + 1, res);
//     swap(s[i], s[index]);
//   }
// }

// Optimized approach
// We are placing N number in N position it will take O(N) time deleting will also take O(N) time.
// TC - O(N*N) SC-O(N)

const getPermutation = (n, k) => {
  // define the identifiers required to solve the problem
  let fact = 1; // it will be used to calculate the factorial possible depending on n
  let nums = []; // this array will store all the possible digits for fact
  let ans = ""; // this string will store the answer

  // Loop n times
  // We calculate fact a digit less than what should be to account for the size of groups
  for (let i = 1; i < n; i++) {
    fact *= i;
    // push all nums from 1 to n -1
    nums.push(i);
  }
  // push the final n - 1 digit
  nums.push(n);
  // the permutation to be found will be k - 1. Due to 0 indexing
  k = k - 1;
  // Loop
  while (true) {
    // Add the first digit to answer from the sequence = nums[k/sequence size];
    let ele = nums[Math.floor(k / fact)];
    // It is the element stored in the nums array at the index found by diving k and fact.
    ans = ans + ele;
    // Now remove that number from nums
    nums.splice(k / fact, 1);
    // Check if length of nums is already 0
    if (nums.length === 0) break;
    // Now find the new kth location
    k = k % fact;
    // The new fact.. since fact = 24 for 4 elements. We already had 6 fact.
    // element is dec to 3.. 3*2/3 = 2. Now we have grps for 2 elements.
    fact = fact / nums.length;
  }
  return ans;
};

// 15) Find all permutation

// Backtracking + Recursion
// TC - O(N! * N) here N! to find all permutation and N as we loop N times for each index
// SC - O(N + N) we use Map array and data to store each permutation
function findAll(nums, state, res, freq) {
  // define the case of termination
  if (nums.length === state.length) {
    // push the element into result array
    res.push([...state]);
    return;
  }

  // Loop for all digits of nums
  for (let i = 0; i < nums.length; i++) {
    // Make sure ith index element not in freq
    if (!freq[i]) {
      // Mark the element index in freq
      freq[i] = true;
      // Add the element in current state
      state.push(nums[i]);
      // Create a recursive call for the same
      findAll(nums, state, res, freq);
      // Remove the last element inserted
      state.pop();
      // Remove it from freq array
      freq[i] = false;
    }
  }
  findAll(nums, state, res, freq);
  return res;
}

// Backtracking, Recursion + Swapping Elements

const permute = (nums) => {
  // Define the edge case
  if (nums.length === 1) {
    return [[1]];
  }

  // Define the identifiers required
  let res = []; // Let the res array store all premutations

  // Define the function for finding all permutations
  function findAll2(nums, idx, res) {
    // define the case of termination
    if (idx === nums.length) {
      // push the element into result array
      res.push([...nums]);
      return;
    }

    // Loop for all indexes of nums
    for (let i = idx; i < nums.length; i++) {
      // Swap the ith element with element at index
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
      // Recursively increment index
      findAll2(nums, idx + 1, res);
      // Swap back to the original position to find further permutations
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
  }

  findAll2(nums, 0, res);
  return res;
};

// 16)  N Queen Problem
// Brute Force TC - O(N^3) SC-O(N^2)

const solveNQueens = (n) => {
  // define the edge case
  if (n === 1) return [["Q"]];

  // Define the identifiers required
  let ans = []; // it will hold all the possible boards with right queen sequence.

  // 1) Form a string of n length which will represent each row of col
  let str = ".".repeat(n);
  // 2) Now create an array of length n.
  let board = new Array(n);
  // 3) Now complete the board by filling each index(i) of array with n length string(.)
  for (let i = 0; i < board.length; i++) {
    board[i] = str;
  }

  // Define the function to check if the current row in ith col is safe to place Queen
  function isSafe(row, col, board) {
    // define the identifiers required
    let dupRow = row;
    let dupCol = col;

    // Check for the upper left diagonal
    while (row >= 0 && col >= 0) {
      if (board[row][col] === "Q") return false;
      row--;
      col--;
    }

    row = dupRow;
    col = dupCol;
    // Check for the left side
    while (row >= 0) {
      if (board[row][col] === "Q") return false;
      row--;
    }

    row = dupRow;
    col = dupCol;
    // Check for the left lower diagonal
    while (row >= 0 && col >= 0) {
      if (board[row][col] === "Q") return false;
      row++;
      col--;
    }
    return true;
  }

  // Define the main recursive function for N Queens.. it iterates cols fn(col, board)
  function solve(col, board) {
    // define the case of termination
    if (col === n) {
      ans.push(board);
      return;
    }

    // Invoke or check for all cols
    for (let row = 0; row < n; row++) {
      // If by chance the current row iteration.. assume it's 0th index or 1 row is safe in 1st call.
      // We will fix a queen here and recursively move to next col. It's simple.
      // If we don't find it safe we remove the queen back from and check for next rows.
      if (isSafe(row, col, board)) {
        // place the queen at current col and row.
        // Col remain constant in a particular recursive call while row iterates until safe
        board[row][col] = "Q";
        // Call the function for next col
        solve(col + 1, board);
        // If recursive call was by any chance unsuccessful. We remove the Queen. This is backtracking.
        board[row][col] = ".";
      }
    }
  }
  // invoking the solve function
  solve(0, board);
  return ans;
};

// Optimized Approach
// TC-O(N^2) SC-O(N^2)

const solveNQueens2 = (n) => {
  // define the edge case
  if (n === 1) return [["Q"]];

  // Define the identifiers required
  let ans = []; // it will hold all the possible boards with right queen sequence.

  // Define the diagonals array to check if Queen there or not.
  let arrSize = 2n;
  arrSize--;
  let upperDiagonal = new Array(arrSize).fill(0);
  let lowerDiagonal = new Array(arrSize).fill(0);

  // Define the row side array
  let leftRow = new Array(n).fill(0);

  // 1) Form a string of n length which will represent each row of col
  let str = ".".repeat(n);
  // 2) Now create an array of length n.
  let board = new Array(n);
  // 3) Now complete the board by filling each index(i) of array with n length string(.)
  for (let i = 0; i < board.length; i++) {
    board[i] = str;
  }

  // Define the main recursive function for N Queens.. it iterates cols fn(col, board)
  function solve(col, board) {
    // define the case of termination
    if (col === n) {
      ans.push(board);
      return;
    }

    // Invoke or check for all cols
    for (let row = 0; row < n; row++) {
      // If by chance the current row iteration.. assume it's 0th index or 1 row is safe in 1st call.
      // We will fix a queen here and recursively move to next col. It's simple.
      // If we don't find it safe we remove the queen back from and check for next rows.
      if (
        leftRow[row] === 0 &&
        lowerDiagonal[row + col] === 0 &&
        upperDiagonal[row + col] === 0
      ) {
        // Fill the current Row where Q is put.. the upperdiagonal and lowerdiagonal
        leftRow[row] = "1";
        upperDiagonal[n - 1 + col - row] = "1";
        lowerDiagonal[row + col] = "1";

        // Now fill the particular index in board with Q
        board[row][col] = "Q";

        solve(col + 1, board);

        // If recursive call was by any chance unsuccessful. We remove the Queen. This is backtracking.
        // Fill the current Row where Q is put.. the upperdiagonal and lowerdiagonal
        leftRow[row] = "0";
        upperDiagonal[n - 1 + col - row] = "0";
        lowerDiagonal[row + col] = "0";

        // Now fill the particular index in board with Q
        board[row][col] = ".";
      }
    }
  }
  // invoking the solve function
  solve(0, board);
};

// 17) Sukdoku Solver

const solveSudoku = (board) => {
  // define the identifiers required
  let n = board.length; // The len of board.
  let res; // It is a global variable which stores the answer.

  // define the function to check if current number filled is valid sudoku or not
  function isValid(board, row, col, c) {
    // Calculate the blocks row and col for checking in the block
    let blockRow = Math.floor(row / 3) * 3;
    let blockCol = Math.floor(col / 3) * 3;
    // Check for all rows if c exist.
    // Check for all cols if c exist.
    // if in the box c exist
    for (let i = 0; i < n; i++) {
      // Rows
      if (board[i][col] === c) {
        return false;
      }
      // Cols
      if (board[row][i] === c) {
        return false;
      }
      // Box
      let curRow = blockRow + Math.floor(i / 3);
      let curCol = blockCol + Math.floor(i % 3);
      if (board[curRow][curCol] === c) return false;
    }
    return true;
  }

  // define the function to solve sudoku
  function solve(board) {
    // Loop for all the rows
    for (let i = 0; i < n; i++) {
      // Loop for all the cols
      for (let j = 0; j < n; j++) {
        // Check if current jth col in ith row is empty
        if (board[i][j] === ".") {
          // Check for all 1 to 9 characters in the particular empty index
          for (let c = 1; c <= 9; c++) {
            // convert c into string
            c = c.toString();
            // Pass it in the valid function
            if (isValid(board, i, j, c)) {
              // fill up the board with that number
              board[i][j] = c;
              // Recursively call for next empty
              if (solve(board) === true) {
                return true;
              } else {
                board[i][j] = ".";
              }
            }
          }
          // Return false in case no number satisfies the box.
          // This will terminate the particular recursive call
          return false;
        }
      }
    }
    // If all the rows traversed successfully by now we have the solution.
    // It is also a termination case for recursion
    return true;
  }
  // invoke the function call.
  return solve(board);
};

// 18) Rat Maze
// TC - O(4^n*m) SC-O(n) [Auxilary space of stack]

function findPath(m, n) {
  // define the identifiers required
  let ans = []; // It will store the final answer.

  // The visitedPath is kept in order to keep track of path visited
  let visitedPath = new Array(n).fill().map((x) => Array(n).fill(0));

  // define the func
  function path(i, j, m, move, vis) {
    // define the case of termination
    if (i === n - 1 && j === n - 1) {
      // push the move string into answer
      ans.push(move);
      return;
    }

    // Check if we can go downwards
    if (i + 1 < n && vis[i + 1][j] !== 1 && m[i + 1][j] === 1) {
      // Change the visited and put 1 instead of 0
      vis[i][j] = 1;
      // Change the string by adding downwards and recursively calling
      path(i + 1, j, m, move + "D", vis);
      // If by any chance the recursive call from downwards reaches dead end remove it
      vis[i][j] = 0;
    }

    // Check if we can go left
    if (j - 1 >= 0 && vis[i][j - 1] !== 1 && m[i][j - 1] === 1) {
      // Change the visited and put 1 instead of 0
      vis[i][j] = 1;
      // Change the string by adding downwards and recursively calling
      path(i, j - 1, m, move + "L", vis);
      // If by any chance the recursive call from downwards reaches dead end remove it
      vis[i][j] = 0;
    }

    // Check if we can go right
    if (j + 1 < n && vis[i][j + 1] !== 1 && m[i][j + 1] === 1) {
      // Change the visited and put 1 instead of 0
      vis[i][j] = 1;
      // Change the string by adding downwards and recursively calling
      path(i, j + 1, m, move + "R", vis);
      // If by any chance the recursive call from downwards reaches dead end remove it
      vis[i][j] = 0;
    }

    // Check if we can go up
    if (i - 1 >= 0 && vis[i - 1][j] !== 1 && m[i - 1][j] === 1) {
      // Change the visited and put 1 instead of 0
      vis[i][j] = 1;
      // Change the string by adding downwards and recursively calling
      path(i - 1, j, m, move + "U", vis);
      // If by any chance the recursive call from downwards reaches dead end remove it
      vis[i][j] = 0;
    }
  }

  // Check if first index is 1. Mice exist
  if (m[0][0] === 1) {
    path(0, 0, m, "", visitedPath);
  }

  // Return the answer
  return ans;
}

// Optimized TC, SC - (SAME)

function findPath(m, n) {
  // define the identifiers required
  // It will store the final paths.
  let ans = [];
  // Let's store the change in value of i and j on moving in 4 directions. DLRU Respectively..
  let di = [+1, 0, 0, -1];
  let dj = [0, -1, +1, 0];

  // The visitedPath is kept in order to keep track of path visited
  let visitedPath = new Array(n).fill().map((x) => Array(n).fill(0));

  // define the func
  function path(i, j, m, move, vis) {
    // define the case of termination
    if (i === n - 1 && j === n - 1) {
      // push the move string into answer
      ans.push(move);
      return;
    }
    // There is a possibility that the Rat can move in multiple directions.
    // We can't write if statements for all
    let dir = "DLRU";
    // Loop for all the directions
    for (let idx = 0; idx < n; idx++) {
      // Inorder to find Next possible direction. Find is there is a path in next direction.
      // If there is a path is it filled if not then move.
      let nexti = i + di[idx];
      let nextj = j + dj[idx];
      // Now do the checks or validations
      if (
        nexti >= 0 &&
        nextj >= 0 &&
        nexti < n &&
        nextj < n &&
        !vis[nexti][nextj] &&
        m[nexti][nextj] === 1
      ) {
        // Change the current i and j to be visited
        vis[i][j] = 1;
        // We recursively call for the next direction
        path(nexti, nextj, m, move + dir[idx], vis);
        // If unsuccessful
        vis[i][j] = 0;
      }
    }
  }

  // Check if first index is 1. Mice exist
  if (m[0][0] === 1) {
    path(0, 0, m, "", visitedPath);
  }

  // Return the answer
  return ans;
}

// 19) MAx One
// Tc-O(N) and Sc-O(1)
const findMaxConsecutiveOnes = function (nums) {
  // define the identifiers required
  let maxOne = 0;
  let countOne = 0;
  for (let i = 0; i < nums.length; i++) {
    // Check if not one
    if (nums[i] !== 1) {
      maxOne = Math.max(maxOne, countOne);
      countOne = 0;
    } else {
      countOne++;
    }
  }
  return maxOne > countOne ? maxOne : countOne;
};
