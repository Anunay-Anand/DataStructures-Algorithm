// 1) Binary Search

const search = (nums, target) => {
  let initial = 0;
  let final = nums.length - 1;
  let mid;
  while (initial <= final) {
    mid = Math.floor((initial + final) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      initial = mid + 1;
    } else {
      final = mid - 1;
    }
  }
  return -1;
};

// 2) First Bad Version

function bad(n) {
  // Here n is total version simply call mid version everytime to check
  let left = 1;
  let right = n;
  let ans = -1;
  let mid;
  while (left <= right) {
    // top quality method to find mid
    mid = Math.floor(left + (right - left) / 2);
    // Even if response is true. We need to check wether it's the first bad version. Thus we keep on iterating
    if (isBadVersion(mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

// 3) Search Insert Positiom

var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[mid] < target ? mid + 1 : mid;
};

// 4) Find the nth Root of m

// Brute Force O(n*m) // SC O(1)
function NthRoot(n, m) {
  //define the identifiers required
  let x = 1;
  while (x <= m) {
    if (x ** n === m) {
      return x;
    }
    x++;
  }
  return -1;
}

// Optimized approach for NoN decimal approach
// Tc - O(n*logm) Sc-O(1)
function NthRootOp(n, m) {
  // define the identifiers required
  let low = 0; // start of the range
  let high = m; // end of the range

  // Apply Binary search over the range
  while (low <= high) {
    // find the middle
    let mid = Math.floor(low + high / 2);
    // Check if the nth root of middle is equal to target
    if (Math.pow(mid, n) === m) return mid;
    else if (Math.pow(mid, n) < m) {
      low = mid + 1;
    } else if (Math.pow(mid, n) > m) {
      high = mid - 1;
    }
  }
  return -1;
}

// Optimized approach for decimal
// TC - O(n*log(m * 10^d)) SC - O(1)
// i) We will run for a range of high - low > 10^-6 (for upto 5th decimal place)
// ii) Our range will be changed including mid instead of mid + 1 or nid - 1.
// iii) If mid^n < m then low = mid else high = mid.

// 5) Single Element in a Sorted Array

// Brute Force (linear search)
// TC - O(n/2)... SC - O(1)
// We will simply run loop from i = 0 and check the consequetive elements.
// We will increment i by 2. If the elements are not same. We will return ith element.

// Optimized using XOR
// TC - O(N)... SC - O(1)
// We will run the loop from 0 and enumerate with xor operator.
// We know p ^ p = 0 and p ^ 0 = p. Thus the element that remains will be p.
// It will have only one occurence.
const singleNonDuplicate = (nums) => {
  // Define the edge case
  if (nums.length === 1) {
    return nums[0];
  }

  // We will use JavaScript reducer function.
  // It keeps on iterating for each element until the end
  // Here we know 0^p = p. Thus 0 being initial value.
  // p ^ p = 0 thus all repeated nums are enumerated to 0
  return nums.reduce((prev, curr) => prev ^ curr, 0);
};

// Optimized Binary Search
// TC - O(logn)
// i) We know that element on the left subarray will have 1st occurence on even index and second on odd.
// ii) Similarly the element on right subarray will have 1st occurence on odd index and second on even.
const singleNonDuplicateOptimized = (nums) => {
  // Define the edge case
  if (nums.length === 1) return nums[0];

  // Define the identifiers required
  let low = 0;
  let high = nums.length - 2;
  let mid;

  // Iterate through the entire search space
  while (low <= high) {
    // Find the mid element of search space
    mid = Math.floor((low + high) / 2);
    // Check if mid and mid^1 element are same. That means we are in left half. Otherwise we are in right half.
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[low];
};

// 6) Search Element in a Rotated Sorted Array
// Brute Force (Linear Search)  TC - O(N) SC - O(1)
// Simply loop until you find the target.

// Optimized (Binary Search) TC - O(logn) SC - O(1)
// i) We know that both left and right subarray are sorted.
// ii) Thus we will check if in the left subarray. Then check if target in range.
// iii) Similarly we will check if in the right subarray. Then check if the target in range.
const searchOptimized = (nums, target) => {
  // define the edge case
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  // define the identifiers required
  let low = 0;
  let high = nums.length - 1;

  // Loop for the entire search space
  while (low <= high) {
    // Find the mid of the search space
    let mid = Math.floor((low + high) / 2);
    // Check if target is at mid index
    if (target === nums[mid]) return mid;

    // If target not at mid check we are in left sorted array
    if (nums[low] <= nums[mid]) {
      // Now check if target lies in Range.
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[high] >= target && target >= nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};
